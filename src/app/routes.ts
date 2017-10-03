import {
    MainComponent,
    SingleProductComponent,
    CreateProductComponent,
    EditProductComponent
} from './components/main/index';
import { Routes } from '@angular/router';


// routes for app
export const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', component: MainComponent},
    { path: 'single/:id', component: SingleProductComponent},
    { path: 'create', component: CreateProductComponent},
    { path: 'edit/:id', component: EditProductComponent},
];

