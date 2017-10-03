import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from 'app/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form;
  processing;
  message;
  messageClass;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location
  ) {
    this.createNewProductForm();
  }

  ngOnInit() {

  }

  // create form
  createNewProductForm() {
    this.form = this.fb.group({
      product_name: ['', Validators.required],
      url: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
        this.validateImage
      ])],
      title: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])],
      description: ['', Validators.compose([
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(2500)
      ])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.min(0)
      ])]
    })
  }

  // image validator
  validateImage(controls) {
    const regExp = new RegExp(/\.(jpeg|jpg|gif|png)$/);
    if (regExp.test(controls.value)) {
      return null;
    } else {
      return { 'validateImage': true }
    }
  }

  // enable form
  enableProductForm() {
    this.form.get('product_name').enable();
    this.form.get('url').enable();
    this.form.get('title').enable();
    this.form.get('description').enable();
    this.form.get('price').enable();
  }

  // desable form
  disableProductForm() {
    this.form.get('product_name').disable();
    this.form.get('url').disable();
    this.form.get('title').disable();
    this.form.get('description').disable();
    this.form.get('price').disable();
  }

  // create new product
  onCreateSubmit() {
    this.processing = true;
    this.disableProductForm();

    const product = {
      product_name: this.form.get('product_name').value,
      data: {
        Image: this.form.get('url').value,
        Title: this.form.get('title').value,
        Description: this.form.get('description').value,
        Price: this.form.get('price').value
      }
    }
    this.productsService.storeProduct(product);
    this.messageClass = 'alert alert-success';
    this.message = 'You have success create new product';
    setTimeout(() => {
      this.processing = false;
      this.form.reset();
      this.router.navigate(['/main']);
    }, 1000);
  }

  goBack() {
    this.location.back();
  }

}
