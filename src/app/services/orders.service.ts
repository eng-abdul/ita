import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  dbRef!:AngularFireList<Orders>;

  obj!:AngularFireObject<Orders>;
  constructor(private db:AngularFireDatabase) {
    this.dbRef = this.db.list('/All Ride Request');
    this.obj = this.db.object('/All Ride Request')
   }

   getOders(){
   return this.db.list('/All Ride Request', (ref)=>{
    return ref.orderByChild('status').equalTo('arrived');
   }).valueChanges()
  }
  rejected(){
    return this.db.list('/All Ride Request', (ref)=>{
     return ref.orderByChild('driverId').equalTo('waiting');
    }).valueChanges()
   }
}
