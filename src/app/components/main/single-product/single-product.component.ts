import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  product_name;
  product;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.product_name = this.activatedRoute.snapshot.params.id;
    this.product = this.productsService.getSingleProduct(this.product_name);
  }

  goMain() {
    this.router.navigate(['/main']);
  }
}
