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

  getProductsList(){
    this.productsListService.getList().subscribe((list: any) => {
      this.products = list.products;
      console.log(list);
    })
  }

}
