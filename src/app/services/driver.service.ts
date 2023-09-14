import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Driver } from '../models/driver';
@Injectable({
  providedIn: 'root'
})
export class DriverService {
  dbRef!:AngularFireList<Driver>;

  obj!:AngularFireObject<Driver>;
  constructor(private db:AngularFireDatabase) {
    this.dbRef = this.db.list('/drivers');
    this.obj = this.db.object('/drivers')
   }
   getDriver(){
    return this.dbRef.valueChanges();
  }

  addDriver(driver:any,id:any){
    this.obj = this.db.object(`/drivers/${id}`)
    return this.obj.set(driver);
  }
  deleteDriver(id:any){
    this.obj = this.db.object(`/drivers/${id}`);
    return this.obj.remove();
   }
}
