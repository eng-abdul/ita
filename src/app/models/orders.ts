export interface Orders {
    car_details:String;
    destinationAddress:string;
    driverId:string;
    driverName:string;
    driverPhone:string;
    originAddress:string;
    status:string;
    time:string;
    userName:string;
    userPhone:string;
    destination:Destination;
    driverLocation:DriverLocation;
    origin:Origin;
}
export interface Destination{
    latitude:string;
    longtude:string;

}
export interface DriverLocation{
    latitude:string;
    longtude:string;

}
export interface Origin{
    latitude:string;
    longtude:string;

}