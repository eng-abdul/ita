import { Component } from '@angular/core';

import { Orders } from 'src/app/models/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
   accept!:any[];
   reject!:any[];
   length :number = 0;
   tablesize:any =[5,10,15,20];
   size:any = 5;
   page:number = 1; 

constructor(private service:OrdersService){
  this.acceptOrders();
  this.rejectedOder();
}
onAccepted(event:any){

  this.page = event;
  this.acceptOrders();
}
onRejected(event:any){

  this.page = event;
  this.rejectedOder();
}
acceptOrders(){

  return this.service.getOders().subscribe((res)=>{
    this.accept = res;
   console.log(res)
  })
}
rejectedOder(){
  return this.service.rejected().subscribe((res)=>{
    this.reject = res;
  
  })
}
}
