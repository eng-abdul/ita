import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver.service';
import { VerfyComponent } from '../verfy/verfy.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent {
  length :number = 0;
  tablesize:any =[5,10,15,20];
  size:any = 5;
  page:number = 1; 
 
  driver!:Driver[];
constructor(private service:DriverService,private dialog:MatDialog){
  this.getDriver();
  
}
onDatachange(event:any){

  this.page = event;
  this.getDriver();
}
getDriver(){
 return this.service.getDriver().subscribe((res)=>{
  this.driver = res;
 this.length = res.length;
 
})
}
deleteDriver(id:any){
  
    this.service.deleteDriver(id).then((res)=>{

    },(err)=>{
      alert(err.message);
    });
}
editModal(element:Driver){
  // return this.dialog.open(DriverEditComponent,{
  //   data:{
  //     id:element.id,
  //     name:element.name,
  //     phone:element.phone,
  //     email:element.email,
  //     color:element.car_details.car_color,
  //     type:element.car_details.car_type,
  //     number:element.car_details.car_number,
  //     model:element.car_details.car_model,
  //   }
  // })
}
verfy(){
  return this.dialog.open(VerfyComponent)
}
}
