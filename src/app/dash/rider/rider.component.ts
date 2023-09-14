import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Rider } from 'src/app/models/rider';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent {
  riderData$!:Rider[];
  length :number = 0;
  tablesize:any =[5,10,15,20];
  size:any = 5;
  page:number = 1; 
  data :any
  constructor( private rider:RiderService,private dialog:MatDialog){
    this.getRider();
  }
  getRider(){
   

   return this.rider.getRider().subscribe((res)=>{
      this.riderData$ = res;
      this.length = res.length;
    });
   }
  
  onDatachange(event:any){
  
       this.page = event;
      this.getRider();
    }
  deleteRider(id:any){
      this.rider.deleteRider(id).then((res)=>{
  
      },(err)=>{
        
      });
  }
editModal(element:Rider){
      // this.dialog.open(RiderEditComponent,{
      //   data:{
      //     id:element.id,
      //     name:element.name,
      //     phone:element.phone,
      //     email:element.email,
      //   }
      // })
    }
}
