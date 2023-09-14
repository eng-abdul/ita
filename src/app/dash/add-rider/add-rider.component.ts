import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rider',
  templateUrl: './add-rider.component.html',
  styleUrls: ['./add-rider.component.css']
})
export class AddRiderComponent {
riderForm!:FormGroup
constructor(private fb:FormBuilder){
  this.riderForm = this.fb.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
  })
}
}
