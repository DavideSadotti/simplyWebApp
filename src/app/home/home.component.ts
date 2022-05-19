import { Component, OnInit } from '@angular/core';
import { ProductsListService } from '../products-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //INIETTO IL SERVICE NEL COSTRUTTORE
  constructor(private productsListService: ProductsListService) { 
    this.getProductsList();
  }

  ngOnInit(): void {
  }

  products: any[] = [];

  reviews: any[] = [
    {
      image: "./../../assets/reviewOne.jpg",
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tempus erat. Nullam elementum erat in velit porttitor, ut commodo nulla suscipit. Mauris diam nunc, ultrices et viverra id, consequat a dolor.",
      date: "Maggio 10, 2022",
      writer: "Nulla Aliquam"
    },
    {
      image: "./../../assets/reviewTwo.jpg",
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tempus erat. Nullam elementum erat in velit porttitor, ut commodo nulla suscipit. Mauris diam nunc, ultrices et viverra id, consequat a dolor.",
      date: "Maggio 18, 2022",
      writer: "Nulla Aliquam"
    },
    {
      image: "./../../assets/reviewThree.jpg",
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tempus erat. Nullam elementum erat in velit porttitor, ut commodo nulla suscipit. Mauris diam nunc, ultrices et viverra id, consequat a dolor.",
      date: "Maggio 27, 2022",
      writer: "Nulla Aliquam"
    }
  ]

  services: any[] = [
    {
      icon: "./../../assets/plane.png",
      title: "Free Shipping",
      text: "Free shipping for all US order"
    },
    {
      icon: "./../../assets/salvagente.png",
      title: "Support 24/7",
      text: "We support 24 hours a day"
    },
    {
      icon: "./../../assets/reload.png",
      title: "30 days return",
      text: "You have 30 days to return"
    },
    {
      icon: "./../../assets/scudo.png",
      title: "Payment 100% Secure",
      text: "Payment 100% Secure"
    },
  ]

  getProductsList(){
    this.productsListService.getList().subscribe((list: any) => {
      this.products = list.products;
      console.log(this.products);
    })
  }

}
