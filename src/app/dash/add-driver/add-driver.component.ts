import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent {
  riderForm!: FormGroup;

  constructor(private service: DriverService, private auth: AuthService, private fb: FormBuilder) {
    this.riderForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
    });
  }

async addDriver() {
    console.log(this.riderForm.value.email);

    return this.auth.CreateUser(this.riderForm.value.email,this.riderForm.value.password).then((res)=>{
      const id = res.user?.uid;
      var druver: any = {
        id:id,
        name: this.riderForm.value.name,
        phone: this.riderForm.value.phone,
        email: this.riderForm.value.email,
        car_details: {
          car_model: this.riderForm.value.model,
          car_type: this.riderForm.value.type,
          car_color: this.riderForm.value.color,
          car_number: this.riderForm.value.number,
        }
      }
      return this.service.addDriver(druver,id).then((res)=>{
        console.log(res)
      },err=>{
        console.log(err)
      })
    })
  }
}
