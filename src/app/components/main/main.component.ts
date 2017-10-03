import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products;
  loadingProducts;
  message;
  messageClass;
  modalData;

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.getAllData();
  }

  // get data from local storage
  getAllData() {
    this.loadingProducts = false;
    this.productsService.storeFirstProducts();
    this.products = this.productsService.getAllProducts();
    this.loadingProducts = true;
  }

  // delete some product
  deleteProduct(product_name) {
    this.productsService.deleteProduct(product_name);
    this.getAllData();
    this.message = 'You have successful delete ' + product_name + '!';
    this.messageClass = 'alert alert-success';
  }

  // just to transfer data to modal window
  transferDataToModal(product) {
    this.modalData = product;
  }
}
