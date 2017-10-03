import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form;
  processing;
  message;
  messageClass;
  product_name;
  product;

  constructor(
    private productsService: ProductsService,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.product_name = this.activatedRoute.snapshot.params.id;
    this.product = this.productsService.getSingleProduct(this.product_name);
    this.createNewProductForm();
  }

  // create form
  createNewProductForm() {
    this.form = this.fb.group({
      url: [this.product.Image, Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250),
        this.validateImage
      ])],
      title: [this.product.Title, Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ])],
      description: [this.product.Description, Validators.compose([
        Validators.required,
        Validators.minLength(100),
        Validators.maxLength(2500)
      ])],
      price: [this.product.Price, Validators.compose([
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
    this.form.get('url').enable();
    this.form.get('title').enable();
    this.form.get('description').enable();
    this.form.get('price').enable();
  }

  // desable form
  disableProductForm() {
    this.form.get('url').disable();
    this.form.get('title').disable();
    this.form.get('description').disable();
    this.form.get('price').disable();
  }

  // edit product
  onEditSubmit() {
    this.processing = true;
    this.disableProductForm();

    const editProduct = {
      product_name: this.product_name,
      data: {
        Image: this.form.get('url').value,
        Title: this.form.get('title').value,
        Description: this.form.get('description').value,
        Price: this.form.get('price').value
      }
    }
    this.productsService.editProduct(editProduct);
    this.messageClass = 'alert alert-success';
    this.message = 'You have success create new product';
    setTimeout(() => {
      this.processing = false;
      this.form.reset();
      this.router.navigate(['/single/' + this.product_name]);
    }, 1000);
  }

  goBack() {
    this.location.back();
  }
}
