import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList, AngularFireObject,} from '@angular/fire/compat/database';
import { Rider } from '../models/rider';
@Injectable({
  providedIn: 'root'
})
export class RiderService {

  private riderRef!: AngularFireList<Rider>;
  private riderObj!: AngularFireObject<Rider>;

  constructor(private database:AngularFireDatabase,) {
      this.riderRef = this.database.list('/users')
   }
   getRider(){
    return this.riderRef.valueChanges();
   }
   Rider(rider:any,id:any){
    //const data = this.database.list(`/users/${id}`);
    this.riderObj = this.database.object(`/users/${id}`);
    return this.riderObj.set(rider);
    //return data.push(rider);
   }
   updateRider(rider:any,id:any){
   this.riderObj = this.database.object(`/users/${id}`);
   return this.riderObj.update(rider);
   }
   deleteRider(id:any){
    this.riderObj = this.database.object(`/users/${id}`);
    return this.riderObj.remove();
   }
}
