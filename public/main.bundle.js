webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* appRoutes */])],
        providers: [],
        bootstrap: [],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\r\n    margin-bottom: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_main_index__ = __webpack_require__("../../../../../src/app/components/main/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_index__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_index__["b" /* SingleProductComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_index__["c" /* CreateProductComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_main_index__["d" /* EditProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_app_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_services_products_service__["a" /* ProductsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/create-product/create-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea { \r\n   resize:vertical;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/create-product/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-muted\" id=\"head\">Product create</h2>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"onCreateSubmit()\">\n\n  <div class=\"form-group\">\n    <label for=\"product_name\">Product name</label>\n    <div [ngClass]=\"{'has-success': form.controls.product_name.valid && form.controls.product_name.dirty, 'has-error': form.controls.product_name.dirty && form.controls.product_name.errors }\">\n      <input type=\"text\" name=\"product_name\" placeholder=\"*product name to store it in localstorage\" class=\"form-control\" autocomplete=\"off\" formControlName=\"product_name\"\n      />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.product_name.dirty && form.controls.product_name.errors?.required\">Product name required</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"url\">Image URL</label>\n    <div [ngClass]=\"{'has-success': form.controls.url.valid && form.controls.url.dirty, 'has-error': form.controls.url.dirty && form.controls.url.errors }\">\n      <input type=\"text\" name=\"url\" placeholder=\"*URL for image\" class=\"form-control\" autocomplete=\"off\" formControlName=\"url\"\n      />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.url.dirty && form.controls.url.errors?.required\">Image URL required</li>\n        <li *ngIf=\"(form.controls.url.dirty && form.controls.url.errors?.maxlength) || (form.controls.url.dirty && form.controls.url.errors?.minlength)\">URL length has to be no less than 10 but no more than 250</li>\n        <li *ngIf=\"form.controls.url.errors?.validateImage && form.controls.url.dirty\">Wrong image format</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid && form.controls.title.dirty, 'has-error': form.controls.title.dirty && form.controls.title.errors }\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*title\" autocomplete=\"off\" formControlName=\"title\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">Title required</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.maxlength) || (form.controls.title.dirty && form.controls.title.errors?.minlength)\">Title length has to be no less than 3 but no more than 50</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <div [ngClass]=\"{'has-success': form.controls.description.valid && form.controls.description.dirty, 'has-error': form.controls.description.dirty && form.controls.description.errors }\">\n      <textarea name=\"description\" placeholder=\"*Product description\" class=\"form-control\" autocomplete=\"off\"\n        formControlName=\"description\"></textarea>\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.description.dirty && form.controls.description.errors?.required\">Description required</li>\n        <li *ngIf=\"(form.controls.description.dirty && form.controls.description.errors?.maxlength) || (form.controls.description.dirty && form.controls.description.errors?.minlength)\">Description length has to be no less than 100 but no more than 2500</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"price\">Price</label>\n    <div [ngClass]=\"{'has-success': form.controls.price.valid && form.controls.price.dirty, 'has-error': form.controls.price.dirty && form.controls.price.errors }\">\n      <input type=\"number\" name=\"price\" placeholder=\"*Product price\" class=\"form-control\" autocomplete=\"off\"\n        formControlName=\"price\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.price.dirty && form.controls.price.errors?.required\">Price required</li>\n        <li *ngIf=\"form.controls.price.dirty && form.controls.price.errors?.min\">Price couldn't be less than 0</li>\n      </ul>\n    </div>\n  </div>\n\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Back</button>\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" (click)=\"onCreateSubmit()\" class=\"btn btn-success\">Create</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/main/create-product/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateProductComponent = (function () {
    function CreateProductComponent(productsService, fb, router, location) {
        this.productsService = productsService;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.createNewProductForm();
    }
    CreateProductComponent.prototype.ngOnInit = function () {
    };
    // create form
    CreateProductComponent.prototype.createNewProductForm = function () {
        this.form = this.fb.group({
            product_name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required],
            url: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(250),
                    this.validateImage
                ])],
            title: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(50)
                ])],
            description: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].minLength(100),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].maxLength(2500)
                ])],
            price: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].min(0)
                ])]
        });
    };
    // image validator
    CreateProductComponent.prototype.validateImage = function (controls) {
        var regExp = new RegExp(/\.(jpeg|jpg|gif|png)$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateImage': true };
        }
    };
    // enable form
    CreateProductComponent.prototype.enableProductForm = function () {
        this.form.get('product_name').enable();
        this.form.get('url').enable();
        this.form.get('title').enable();
        this.form.get('description').enable();
        this.form.get('price').enable();
    };
    // desable form
    CreateProductComponent.prototype.disableProductForm = function () {
        this.form.get('product_name').disable();
        this.form.get('url').disable();
        this.form.get('title').disable();
        this.form.get('description').disable();
        this.form.get('price').disable();
    };
    // create new product
    CreateProductComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableProductForm();
        var product = {
            product_name: this.form.get('product_name').value,
            data: {
                Image: this.form.get('url').value,
                Title: this.form.get('title').value,
                Description: this.form.get('description').value,
                Price: this.form.get('price').value
            }
        };
        this.productsService.storeProduct(product);
        this.messageClass = 'alert alert-success';
        this.message = 'You have success create new product';
        setTimeout(function () {
            _this.processing = false;
            _this.form.reset();
            _this.router.navigate(['/main']);
        }, 1000);
    };
    CreateProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CreateProductComponent;
}());
CreateProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-product',
        template: __webpack_require__("../../../../../src/app/components/main/create-product/create-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/create-product/create-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _d || Object])
], CreateProductComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea { \r\n    resize:vertical;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-muted\" id=\"head\">Edit product</h2>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n<form [formGroup]=\"form\" (submit)=\"onEditSubmit()\" *ngIf=\"product\">\n\n  <div class=\"form-group\">\n    <label for=\"url\">Image URL</label>\n    <div [ngClass]=\"{'has-success': form.controls.url.valid, 'has-error': form.controls.url.errors }\">\n      <input type=\"text\" name=\"url\" placeholder=\"*URL for image\" class=\"form-control\" autocomplete=\"off\" formControlName=\"url\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.url.errors?.required\">Image URL required</li>\n        <li *ngIf=\"form.controls.url.errors?.maxlength || form.controls.url.errors?.minlength\">URL length has to be no less than 10 but no more than 250</li>\n        <li *ngIf=\"form.controls.url.errors?.validateImage\">Wrong image format</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.errors }\">\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*title\" autocomplete=\"off\" formControlName=\"title\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.errors?.required\">Title required</li>\n        <li *ngIf=\"form.controls.title.errors?.maxlength || form.controls.title.errors?.minlength\">Title length has to be no less than 3 but no more than 50</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <div [ngClass]=\"{'has-success': form.controls.description.valid, 'has-error': form.controls.description.errors }\">\n      <textarea name=\"description\" placeholder=\"*Product description\" class=\"form-control\" autocomplete=\"off\"\n        formControlName=\"description\"></textarea>\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.description.errors?.required\">Description required</li>\n        <li *ngIf=\"form.controls.description.errors?.maxlength || form.controls.description.errors?.minlength\">Description length has to be no less than 100 but no more than 2500</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"price\">Price</label>\n    <div [ngClass]=\"{'has-success': form.controls.price.valid, 'has-error': form.controls.price.errors }\">\n      <input type=\"number\" name=\"price\" placeholder=\"*Product price\" class=\"form-control\" autocomplete=\"off\"\n        formControlName=\"price\" />\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.price.errors?.required\">Price required</li>\n        <li *ngIf=\"form.controls.price.errors?.min\">Price couldn't be less than 0</li>\n      </ul>\n    </div>\n  </div>\n\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Back</button>\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" (click)=\"onEditSubmit()\" class=\"btn btn-success\">Edit</button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/main/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProductComponent = (function () {
    function EditProductComponent(productsService, fb, router, location, activatedRoute) {
        this.productsService = productsService;
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.activatedRoute = activatedRoute;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.product_name = this.activatedRoute.snapshot.params.id;
        this.product = this.productsService.getSingleProduct(this.product_name);
        this.createNewProductForm();
    };
    // create form
    EditProductComponent.prototype.createNewProductForm = function () {
        this.form = this.fb.group({
            url: [this.product.Image, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(250),
                    this.validateImage
                ])],
            title: [this.product.Title, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(50)
                ])],
            description: [this.product.Description, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(100),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].maxLength(2500)
                ])],
            price: [this.product.Price, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].min(0)
                ])]
        });
    };
    // image validator
    EditProductComponent.prototype.validateImage = function (controls) {
        var regExp = new RegExp(/\.(jpeg|jpg|gif|png)$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'validateImage': true };
        }
    };
    // enable form
    EditProductComponent.prototype.enableProductForm = function () {
        this.form.get('url').enable();
        this.form.get('title').enable();
        this.form.get('description').enable();
        this.form.get('price').enable();
    };
    // desable form
    EditProductComponent.prototype.disableProductForm = function () {
        this.form.get('url').disable();
        this.form.get('title').disable();
        this.form.get('description').disable();
        this.form.get('price').disable();
    };
    // edit product
    EditProductComponent.prototype.onEditSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableProductForm();
        var editProduct = {
            product_name: this.product_name,
            data: {
                Image: this.form.get('url').value,
                Title: this.form.get('title').value,
                Description: this.form.get('description').value,
                Price: this.form.get('price').value
            }
        };
        this.productsService.editProduct(editProduct);
        this.messageClass = 'alert alert-success';
        this.message = 'You have success create new product';
        setTimeout(function () {
            _this.processing = false;
            _this.form.reset();
            _this.router.navigate(['/single/' + _this.product_name]);
        }, 1000);
    };
    EditProductComponent.prototype.goBack = function () {
        this.location.back();
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/components/main/edit-product/edit-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EditProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_component__ = __webpack_require__("../../../../../src/app/components/main/main.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_product_single_product_component__ = __webpack_require__("../../../../../src/app/components/main/single-product/single-product.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__single_product_single_product_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_product_create_product_component__ = __webpack_require__("../../../../../src/app/components/main/create-product/create-product.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__create_product_create_product_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/main/edit-product/edit-product.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__edit_product_edit_product_component__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main{\r\n    text-align: center;\r\n}\r\n\r\n.edit-delete{\r\n    margin-top:5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-muted\">Products</h3>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n  <div [ngClass]=\"messageClass\">\n    {{message}}\n  </div>\n</div>\n\n<div class=\"col-md-12\">\n  <div>\n    <a [routerLink]=\"['/create']\"><button type=\"button\" name=\"button\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span>&nbsp;Create new</button></a>\n  </div>\n\n  <div *ngIf=\"loadingProducts\">\n    <div *ngFor=\"let product of products; let i = index\" [attr.data-index]=\"i\">\n      <div class=\"col-md-4 col-sm-6 col-xs-12 main\">\n        <a [routerLink]=\"['/single/', product.product_name]\">\n            <img class=\"img-responsiv\" [src]=\"product.data.Image\" onError=\"this.src='../../../assets/images/placeholder.png';\" width=\"250\" height=\"250\">\n            <h3>{{product.data.Title}}</h3>\n        </a>\n        <div class=\"edit-delete\">\n          <a [routerLink]=\"['/edit/', product.product_name]\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\"><span class=\"glyphicon glyphicon-pencil\"></span>&nbsp;Edit</button></a>\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"transferDataToModal(product)\"><span class=\"glyphicon glyphicon-remove\"></span>&nbsp;Delete</button>\n        </div>\n      </div>\n      <div *ngIf=\"(i+1)%3 === 0 && i!==0\" class=\"clearfix visible-md visible-lg\"></div>\n    </div>\n  </div>\n\n  <!-- Modal -->\n  <div *ngIf=\"modalData\" class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Are you sure that you want to delete {{modalData.product_name}}?</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>{{modalData.data.Title}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteProduct(modalData.product_name)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(productsService) {
        this.productsService = productsService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getAllData();
    };
    // get data from local storage
    MainComponent.prototype.getAllData = function () {
        this.loadingProducts = false;
        this.productsService.storeFirstProducts();
        this.products = this.productsService.getAllProducts();
        this.loadingProducts = true;
    };
    // delete some product
    MainComponent.prototype.deleteProduct = function (product_name) {
        this.productsService.deleteProduct(product_name);
        this.getAllData();
        this.message = 'You have successful delete ' + product_name + '!';
        this.messageClass = 'alert alert-success';
    };
    // just to transfer data to modal window
    MainComponent.prototype.transferDataToModal = function (product) {
        this.modalData = product;
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/components/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main/single-product/single-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    display: block;\r\n    margin: auto;\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.main {\r\n  text-transform: uppercase;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main/single-product/single-product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3 *ngIf=\"product\" class=\"text-muted main\">{{product_name}}</h3>\n<div>\n<a [routerLink]=\"['/main']\"><p type=\"button\" name=\"button\" (click)=\"goMain()\"><span class=\"glyphicon glyphicon-arrow-left\"></span> Go back to the main</a>\n</div>\n<div class=\"col-md-10 col-md-push-1\">\n  <div *ngIf=\"product\">\n    <h4 class=\"featurette-heading\">{{product.Title}}</h4>\n    <div class=\"col-xs-12\">\n      <div class=\"col-md-7 col-sm-7 col-xs-12\">\n        <p>{{product.Description}}</p>\n        <hr/>\n        <h4 class=\"featurette-heading\">{{product.Price}}$ per kg</h4>\n      </div>\n      <div class=\"col-md-5 col-sm-5 col-xs-12\">\n          <img [src]=\"product.Image\" onError=\"this.src='../../../assets/images/placeholder.png';\" width=\"400\"\n            height=\"400\">\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main/single-product/single-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleProductComponent = (function () {
    function SingleProductComponent(productsService, activatedRoute, router) {
        this.productsService = productsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        this.product_name = this.activatedRoute.snapshot.params.id;
        this.product = this.productsService.getSingleProduct(this.product_name);
    };
    SingleProductComponent.prototype.goMain = function () {
        this.router.navigate(['/main']);
    };
    return SingleProductComponent;
}());
SingleProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-product',
        template: __webpack_require__("../../../../../src/app/components/main/single-product/single-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main/single-product/single-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_products_service__["a" /* ProductsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SingleProductComponent);

var _a, _b, _c;
//# sourceMappingURL=single-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_index__ = __webpack_require__("../../../../../src/app/components/main/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });

// routes for app
var appRoutes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_0__components_main_index__["a" /* MainComponent */] },
    { path: 'single/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_main_index__["b" /* SingleProductComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_0__components_main_index__["c" /* CreateProductComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_0__components_main_index__["d" /* EditProductComponent */] },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsService = (function () {
    function ProductsService() {
        // there are some products when local storage is empty
        this.products = [
            { product_name: 'orange', data: {
                    Image: 'https://4.imimg.com/data4/QC/VP/MY-24427881/juicy-oranges-500x500.jpg',
                    Title: 'The orange contains vitamin C',
                    // tslint:disable-next-line:max-line-length
                    Description: 'The lemon is a small tree (Citrus limon) that is green even in the winter. It came from Asia, and is also the name of the tree"s oval-shaped yellow fruit. The fruit is used for cooking and other things in the world – usually for its juice.People do not know for sure where lemons have come from. However, most people think that lemons first grew in India, northern Burma, and China.[1][2] The lemon is the common name for Citrus limon. A lemon is a yellow citrus fruit. It is related to the orange. Lemon juice is about 5% citric acid, and has a pH of 2 to 3. Lemon plants vary in size yet stay generally small. The tallest height they can get is about 6 meters tall. Lemons taste sour. The juice, zest, and pulp are often used in cooking, often on fish and other meat for better taste. Lemon is also used to flavour drinks, such as lemonade or soft drinks.',
                    Price: '1'
                }
            },
            { product_name: 'lemon', data: {
                    Image: 'http://images6.fanpop.com/image/photos/34900000/Lemon-fruit-34914820-500-500.jpg',
                    Title: 'The lemon contains vitamin C',
                    // tslint:disable-next-line:max-line-length
                    Description: 'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.[1] It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.[2] The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin;[2][3] however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations.[4] The chloroplast genes, and therefore the maternal line, seem to be pomelo.[2] The sweet orange has had its full genome sequenced.[2] Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.[3]',
                    Price: '1.5'
                }
            },
            { product_name: 'banana', data: {
                    Image: 'http://www.eligita.kz/image/cache/catalog/aroma/banana-500x500.jpg',
                    Title: 'Bananas are very delicious',
                    // tslint:disable-next-line:max-line-length
                    Description: 'The banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.',
                    Price: '1.2'
                }
            },
            { product_name: 'pineapple', data: {
                    Image: 'http://esmoke.su/image/cache/Pictures/e-liq/zhidkost-dlya-elektronnyx-sigaret-esmoke-premium-Pineapple-500x500.jpg',
                    Title: 'Pineapple is tasty',
                    // tslint:disable-next-line:max-line-length
                    Description: 'The pineapple (Ananas comosus) is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples,[2][3] and the most economically significant plant in the Bromeliaceae family.[4] Pineapples may be cultivated from a crown cutting of the fruit,[2][5] possibly flowering in 5–10 months and fruiting in the following six months.[5][6] Pineapples do not ripen significantly after harvest.[7] Pineapples can be consumed fresh, cooked, juiced, or preserved. They are found in a wide array of cuisines. In addition to consumption, the pineapple leaves are used to produce the textile fiber piña in the Philippines, commonly used as the material for the men"s barong Tagalog and women\'s baro\'t saya formal wear in the country. The fiber is also used as a component for wallpaper and other furnishings.[8]',
                    Price: '2.5'
                }
            },
            { product_name: 'grapefruit', data: {
                    Image: 'http://xaoc-lab.ru/image/cache/catalog/FA/FA%20Grapefruit-500x500.jpg',
                    Title: 'Grapefruit is very acidic but very good',
                    // tslint:disable-next-line:max-line-length
                    Description: 'The grapefruit (Citrus × paradisi) is a subtropical citrus tree known for its sour to semi-sweet, somewhat bitter fruit. Grapefruit is a hybrid originating in Barbados as an accidental cross between two introduced species, sweet orange (C. sinensis) and pomelo or shaddock (C. maxima), both of which were introduced from Asia in the seventeenth century.[1] When found, it was named the “forbidden fruit”;[2] and frequently, it has been misidentified with the pomelo.[3] The grapefruit\'s name alludes to clusters of the fruit on the tree, which often appear similar to that of grapes.[4]',
                    Price: '1.35'
                }
            },
            { product_name: 'kiwi', data: {
                    Image: 'http://vapecity.in.ua/image/cache/catalog/Goods/Flavours/TPA/Fruits/Kiwi-500x500.png',
                    Title: 'You have to taste it',
                    // tslint:disable-next-line:max-line-length
                    Description: 'Kiwifruit (often abbreviated as kiwi) or Chinese gooseberry is the edible berries of several species of woody vines in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit (\'Hayward\')[3] is oval, about the size of a large hen\'s egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture and a sweet but unique flavor. It is a commercial crop in several countries, such as China, Italy, New Zealand, Chile, Greece, and France.[4]',
                    Price: '2'
                }
            },
        ];
    }
    // store product in local storage
    ProductsService.prototype.storeProduct = function (product) {
        localStorage.setItem(product.product_name, JSON.stringify(product.data));
    };
    // get single product from local storage
    ProductsService.prototype.getSingleProduct = function (product_name) {
        return JSON.parse(localStorage.getItem(product_name));
    };
    // get all products from local storage
    ProductsService.prototype.getAllProducts = function () {
        var productsArray = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var data = JSON.parse(localStorage.getItem(key));
            productsArray.push({ product_name: key, data: data });
        }
        return productsArray;
    };
    // delete product from local storage
    ProductsService.prototype.deleteProduct = function (product_name) {
        localStorage.removeItem(product_name);
    };
    // edit product from local storage
    ProductsService.prototype.editProduct = function (product) {
        this.deleteProduct(product.product_name);
        localStorage.setItem(product.product_name, JSON.stringify(product.data));
    };
    // when the page is initialized it checks if there are some data in local storage
    // if not, then it create some products in it,
    // if yes, then it do nothing
    ProductsService.prototype.storeFirstProducts = function () {
        if (localStorage.length === 0) {
            for (var i = 0; i < this.products.length; i++) {
                localStorage.setItem(this.products[i].product_name, JSON.stringify(this.products[i].data));
            }
        }
    };
    return ProductsService;
}());
ProductsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProductsService);

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map