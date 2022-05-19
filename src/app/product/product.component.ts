import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productDetailService: ProductsListService,
              private route: ActivatedRoute) {
                this.getProductDetail();
              }

  ngOnInit(): void {
  }
  
  details: any[] = [];
  productId = this.route.snapshot.params['id'];
  color: {} = {
    colorOne: "#000000",
    colorTwo: "white",
    colorThree: "gray"
  }
  information: any[] = [
    'Descriptiom',
    'Additional information',
    'Warranty & Shipping',
    'Custom tab',
    'Reviews'
  ]

  getProductDetail(){
    this.productDetailService.getDetail(this.productId).subscribe((detail: any) => {
      this.details.push(detail);
      if(this.details[0].category == "smartphones" || this.details[0].category == "laptops"){
        this.details[0].color = this.color;
      }
      console.log(this.details);
    })
  }

}
