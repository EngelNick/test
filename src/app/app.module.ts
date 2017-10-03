import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { ProductsService } from 'app/services/products.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {
  MainComponent,
  SingleProductComponent,
  CreateProductComponent,
  EditProductComponent
} from './components/main/index';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SingleProductComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
