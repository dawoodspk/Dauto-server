import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }


  constructor() { }

}

const IMAGES = [
  {"brand" : "Honda",  "model" : "Civic",
     "specification" : "Fuel Type : Petrol, No of Cylinders : 4, Fuel System : EFI with i-VTEC"},
  {"brand" : "Toyota", "model" : "Corolla",
     "specification" : "Fuel System : Sequential Multiport Fuel Injection, Fuel Type : Petrol , No of Cylinders	4"},
  {"brand" : "Audi",   "model" : "R8" , 
     "specification" : "Fuel Type : Petrol, Engine Displacement : 5204 cc"},
  {"brand" : "Honda",  "model" : "Vezel" , 
     "specification" : "Fuel System	: EFI (non hybrid), Fuel Type : Petrol, No of Cylinders : 4"},
  {"brand" : "Suzuki", "model" : "Vitara", 
     "specification" : "Fuel System : Multipoint Injection, Fuel Type :	Petrol, No of Cylinders :	4"},
  {"brand" : "Nissan", "model" : "GTR", 
     "specification" : "Cruising Range - City : mi	297.00, EPA Fuel Economy : MPG	15, Fuel Economy : MPG	17"}

]
