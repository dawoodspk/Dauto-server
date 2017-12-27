import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../image.service';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {

  mydata ;

  get(){
    var url='getbuycar';
    this.http.getData(url).subscribe(data1 => {
      console.log(data1, "data from db")
      this.mydata = data1.data
    },
      err => {
        console.log(err, "error")
      }
    )
  }


 // visibleImages : any[] = [];

  constructor(private imageService : ImageService, private http : HttpService) {
   // this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
    this.get();
  }

}
