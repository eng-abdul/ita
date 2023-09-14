import { Car_Details } from "./car-details";

export interface Driver {
    id:string;
    email:string;
    name:string;
    phone:string;
    car_details:Car_Details; 
}