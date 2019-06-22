(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/authentication.service */ "./src/app/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'FixLab';
    }
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}()); /*
ngOnInit(){
this.fetchData();
}
fetchData(){
this.apiService.fetch().subscribe((data:  Array<Item>)=>{
console.log(data);
this.items  =  data;
}, (err)=>{
console.log(err);
});
}
}*/



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_notify_notify_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/notify/notify.component */ "./src/app/components/notify/notify.component.ts");
/* harmony import */ var _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/answers/answers.component */ "./src/app/components/answers/answers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Firebase:


//Servicios:


//Router:

//Módulos:

//Ngx-Bootstrap:











//Componentes:








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"],
                _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_28__["DiscoverComponent"],
                _components_notify_notify_component__WEBPACK_IMPORTED_MODULE_29__["NotifyComponent"],
                _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_30__["AnswersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_10__["APP_ROUTING"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__["AccordionModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ButtonsModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_17__["CollapseModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_18__["TabsModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_20__["ProgressbarModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]
            ],
            providers: [_services_posts_service__WEBPACK_IMPORTED_MODULE_8__["PostsService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_9__["AnswersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/discover/discover.component */ "./src/app/components/discover/discover.component.ts");
/* harmony import */ var _components_notify_notify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/notify/notify.component */ "./src/app/components/notify/notify.component.ts");
/* harmony import */ var _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/answers/answers.component */ "./src/app/components/answers/answers.component.ts");


//Componentes:






var ROUTES = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        children: [
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
            { path: 'discover', component: _components_discover_discover_component__WEBPACK_IMPORTED_MODULE_5__["DiscoverComponent"] },
            { path: 'notify', component: _components_notify_notify_component__WEBPACK_IMPORTED_MODULE_6__["NotifyComponent"] },
            { path: 'answers', component: _components_answers_answers_component__WEBPACK_IMPORTED_MODULE_7__["AnswersComponent"] }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'dashboard/home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/auth/sign/sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '*', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/*' }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/auth/sign/sign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Router:

//Servicios:


//Componentes:



var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _sign_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"]],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.styles.css":
/*!**************************************!*\
  !*** ./src/app/auth/auth.styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box\n{\n    background: #151515ba;\n    color: #fff;\n    text-align: center;\n    box-sizing: border-box;\n    border-radius: 20px;\n}\n  \n.login-box .avatar \n{\n    height: 120px;\n    position: static;\n    top: 24px;\n    left: calc(50% - 107px);\n}\n  \n.login-box h1 \n{\n    margin: 0;\n    padding: 0 0 20px;\n    text-align: center;\n    font-size: 22px;\n}\n  \n.login-box label \n{\n    margin: 0;\n    padding: 0;\n    display: block;\n}\n  \n.login-box input \n{\n    width: 100%;\n    text-align: center;\n    margin-bottom: 20px;\n}\n  \n.login-box input[type=\"text\"], .login-box input[type=\"password\"] \n{\n    border: none;\n    border-bottom: 1px solid azure;\n    background: transparent;\n    outline: none;\n    height: 40px;\n    color: #fff;\n    font-size: 16px;\n}\n  \n.login-box input[type=\"submit\"], input[type=\"button\"] \n{\n    border: none;\n    outline: none;\n    height: 40px;\n    color: azure;\n    font-size: 18px;\n    border-radius: 20px;\n}\n  \n.login-box input[type=\"submit\"], input[type=\"button\"]:hover\n{\n    cursor: pointer;\n    color: azure;\n}\n  \n.login-box a \n{\n    text-decoration: none;\n    font-size: 12px;\n    line-height: 20px;\n    color: darkgrey;\n}\n  \n.login-box a:hover\n{\n    color: azure;\n}\n  \n.login-box hr\n{\n    color: #151515ba;\n}"

/***/ }),

/***/ "./src/app/auth/authentication.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/authentication.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.register = function (user) {
        return this.http.post("/users/register", user);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var base = this.http.post("/users/login", user);
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.editprofile = function (prof, id_user) {
        return this.http.post('http://localhost:3000/users/update/' + id_user, prof);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"py-5 text-center text-white\">\n    <div class=\"container-fluid text-center\">\n      <div class=\"row\">\n        <div class=\"p-5 col-lg-6 col-10 mx-auto login-box\">\n          <img src=\"/assets/images/logo.png\" class=\"avatar text-center\" alt=\"Logo FixLab\">\n          <br>\n          <h1>Accede a Fixlab</h1>\n          <form (ngSubmit)=\"login(f)\" #f=\"ngForm\" novalidate=\"\">\n\n            <!--Email-->\n              <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\" #email=\"ngModel\"\n            [ngClass]= \"{'is-invalid':email.errors!=null && email.touched, 'is-valid':email.errors==null}\"\n            [(ngModel)]=\"credentials.email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Correo electrónico\">\n              \n              <!--Si es válido-->\n              <div *ngIf=\"email.valid\" class=\"valid-feedback\"></div>\n              <!--Si es inválido-->\n              <div class=\"invalid-feedback\">\n                <div *ngIf=\"email.errors?.required\">\n                    <small>Este campo es requerido.</small>\n                </div>\n                <div *ngIf=\"email.errors?.pattern\">\n                    <small>Se debe introducir un patrón de email válido.</small>\n                </div>\n              </div>\n            <hr>\n            \n            <!--Password-->\n              <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" \n              #password=\"ngModel\" [(ngModel)]=\"credentials.password\" placeholder=\"Password\" \n              [ngClass]= \"{'is-invalid':password.errors!=null && password.touched, 'is-valid':password.errors==null}\" required minlength=\"8\">\n              <!--Si es válido-->\n              <div *ngIf=\"email.valid\" class=\"valid-feedback\"></div>\n              <!--Si es inválido-->\n              <div class=\"invalid-feedback\">\n                  <div *ngIf=\"password.errors?.required\">\n                      <small>Este campo es requerido.</small>\n                  </div>\n                  <div *ngIf=\"password.errors?.minlength\">\n                      <small>El nombre debe tener al menos {{password.errors.minlength.requiredLength}} carácteres.</small>\n                  </div>\n              </div>           \n            <hr>\n\n            <input class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Acceder\" [disabled]=\"!f.valid\">\n            <input class=\"btn btn-danger btn-block\" type=\"button\" value=\"Volver\" [routerLink]=\"['/']\">\n            <hr>\n\n            <a [routerLink]=\"['/register']\" routerLinkActive=\"active\">¿No tienes una cuenta?</a>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            id_user: 0,
            email: '',
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            console.log("Iniciaste sesión");
            _this.router.navigateByUrl('/dashboard/home');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ../auth.styles.css */ "./src/app/auth/auth.styles.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"py-5 text-center text-white\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"p-5 col-lg-6 col-10 mx-auto login-box\">\n          <img src=\"/assets/images/logo.png\" class=\"avatar text-center\" alt=\"Logo FixLab\">\n          <br>\n          <h1>¡Únete a nosotros!</h1>\n          <form (ngSubmit)=\"register(f)\" #f=\"ngForm\" novalidate=\"\" method=\"POST\">\n\n            <!-- Nombre de usuario -->           \n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" #username=\"ngModel\" [(ngModel)]=\"credentials.username\" [ngClass]=\"{'is-invalid':username.errors!=null && username.touched, 'is-valid':username.errors==null}\" required minlength=\"3\" placeholder=\"Nombre de usuario\">\n                <!--Si no es válido-->\n                <div class=\"invalid-feedback\">\n                    <div *ngIf=\"username.errors?.required\">\n                        <small>Este campo es requerido.</small>\n                    </div>\n                    <div *ngIf=\"username.errors?.minlength\">\n                        <small>El nombre debe tener al menos {{username.errors.minlength.requiredLength}} carácteres.</small>\n                    </div>\n                </div>\n                <!--Si es válido-->\n                <div *ngIf=\"username.valid\" class=\"valid-feedback\"></div>\n            <hr>            \n\n            <!--Email-->\n            <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\" #email=\"ngModel\" [(ngModel)]=\"credentials.email\"\n          [ngClass]= \"{'is-invalid':email.errors!=null && email.touched, 'is-valid':email.errors==null}\" \n          required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Correo electrónico\">\n            \n            <!--Si es válido-->\n            <div *ngIf=\"email.valid\" class=\"valid-feedback\"></div>\n            <!--Si es inválido-->\n            <div class=\"invalid-feedback\">\n              <div *ngIf=\"email.errors?.required\">\n                  <small>Este campo es requerido.</small>\n              </div>\n              <div *ngIf=\"email.errors?.pattern\">\n                  <small>Se debe introducir un patrón de email válido.</small>\n              </div>\n            </div>\n            <hr>\n            \n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"credentials.password\" placeholder=\"Password\" [ngClass]= \"{'is-invalid':password.errors!=null && password.touched, 'is-valid':password.errors==null}\" required minlength=\"8\">\n            <!--Si es válido-->\n            <div *ngIf=\"email.valid\" class=\"valid-feedback\"></div>\n            <!--Si es inválido-->\n            <div class=\"invalid-feedback\">\n                <div *ngIf=\"password.errors?.required\">\n                    <small>Este campo es requerido.</small>\n                </div>\n                <div *ngIf=\"password.errors?.minlength\">\n                    <small>El nombre debe tener al menos {{password.errors.minlength.requiredLength}} carácteres.</small>\n                </div>\n            </div>              \n            <hr>\n\n\n            <input class=\"btn btn-primary btn-block\"  value=\"Registrase\" [disabled]=\"!f.valid\" type=\"submit\" >\n            <input class=\"btn btn-danger btn-block\" type=\"button\" value=\"Volver\" [routerLink]=\"['/']\">\n            <hr>\n\n            <a [routerLink]=\"['/login']\" routerLinkActive=\"active\">¿Ya dispone de una cuenta con nosotros?</a>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            id_user: 0,
            email: "",
            username: "",
            password: ""
        };
    }
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl("/home");
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ../auth.styles.css */ "./src/app/auth/auth.styles.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/sign/sign.component.css":
/*!**********************************************!*\
  !*** ./src/app/auth/sign/sign.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.saludo{\n    margin: 0 auto;\n    width: 70%;   \n    justify-content: center;\n}\n\n.titulo{    \n    text-align: center;\n    color: white;\n    font-size: 90px;\n    padding: 2px;\n    background-size: cover;\n    padding: 1px;\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n.botones{\n    width: 60%;\n    margin: 0 auto;\n    position: relative;\n    display: block;\n    font-family: 'Noto Sans KR', sans-serif;\n}\n\n.btn-dark{\nbackground-color: #060504;\nborder-color: #060504;  \n}\n\n.btn-dark:hover{\nbackground-color:#343a40;\nborder-color: #343a40;\n}\n\nimg\n{\n    width: 300px;\n    height: 200px;\n}\n\n.dark\n{\n    background-color: #151515ba;\n    color: #fff;\n    box-sizing: border-box;\n    border-radius: 20px;\n}   "

/***/ }),

/***/ "./src/app/auth/sign/sign.component.html":
/*!***********************************************!*\
  !*** ./src/app/auth/sign/sign.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container text-center\">\n<img src=\"/assets/images/logo.png\" class=\"img text-center\" alt=\"Logo FixLab\">\n</div>\n<div class=\"container-fluid\">  \n  <div class=\"saludo\">\n    <div class=\"titulo text-*-center\">\n         </div>\n        <div class=\"botones\">\n        <a class=\"btn btn-lg btn-block btn-dark\" role=\"button\" [routerLink]=\"['/login']\">Inicia sesión</a>\n        <a class=\"btn  btn-lg btn-light btn-block\" role=\"button\" [routerLink]=\"['/register']\">Regístrate</a>         \n    </div>\n  </div>\n</div> \n\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/auth/sign/sign.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/sign/sign.component.ts ***!
  \*********************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignComponent = /** @class */ (function () {
    function SignComponent() {
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/auth/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/auth/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/components/answers/answers.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/answers/answers.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/answers/answers.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/answers/answers.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/answers/answers.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/answers/answers.component.ts ***!
  \*********************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswersComponent = /** @class */ (function () {
    function AnswersComponent() {
    }
    AnswersComponent.prototype.ngOnInit = function () {
    };
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/components/answers/answers.component.html"),
            styles: [__webpack_require__(/*! ./answers.component.css */ "./src/app/components/answers/answers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<router-outlet></router-outlet>\n<br>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/discover/discover.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/discover/discover.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Visualización de tarjetas-->\n<div class=\"container-fluid\" *ngFor=\"let post of pposts\">\n\t<div class=\"notice notice-info notice-lg\">\n    \t<strong>{{post.title}}</strong>\n    \t<hr>\n    \t<img *ngIf=\"post.image==null\" src=\"/assets/images/no-image.png\" class=\"img-fluid avatar\">\n        <img *ngIf=\"post.image!=null\" src={{post.image}} class=\"img-fluid avatar\">\n    \t<br>\n    \t<p>{{ post.description }}</p>\n    \t<div class=\"text-right\">\n        \t&nbsp;\n        \t<button type=\"button\" class=\"btn btn-info btn-modify\"\n\t\t\t   tooltip=\"Ver respuestas\" placement=\"bottom\">\n\t\t      \t<i class=\"far fa-eye\"></i>\n\t\t  \t</button>\n\t\t\t&nbsp;\n\t\t\t<button type=\"button\" class=\"btn btn-primary btn-modify\" (click)=\"reply(template1, post)\"\n\t\t\t   tooltip=\"Responder\" placement=\"bottom\">\n\t\t      \t<i class=\"fas fa-reply\"></i>\n\t\t  \t</button>\n\t\t  \t&nbsp;\n    \t</div>\n\t</div>\t\n</div>\n\n\t<!--Modal para responder a una publicación-->\n<ng-template #template1>\n\t<div class=\"modal-header\">\n\t    <h4 class=\"modal-title pull-left\">Crear nueva publicación</h4>\n\t    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef1.hide()\">\n\t      <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n\t</div>\n\n\t<div class=\"modal-body\">\n\t\t<div class=\"container text-center\">\t\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t<form #f=\"ngForm\" novalidate=\"\" method=\"POST\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<label for=\"name\"><h4>Escribe tu respuesta</h4></label>\n\t\t\t\t\t\t\t\t<textarea type=\"text\"  name=\"text\" class=\"form-control\"  placeholder=\"Tu respuesta...\" [(ngModel)]=\"newAnswer.text\">\t\n\t\t\t\t\t\t\t\t</textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<label for=\"descripcion\"><h4>Precio</h4></label><br>\n\t\t\t\t\t\t\t\t<input type=\"number\" name=\"price\" placeholder=\"0.00$\" [(ngModel)]=\"newAnswer.price\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" value=\"POST\" (click)=\"addreply(f)\" type=\"submit\">Publicar respuesta\n\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn btn-cancelar btn-danger\" (click)=\"modalRef1.hide()\">Cancelar\n\t\t\t\t\t\t\t<i class=\"far fa-times-circle\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t</form>\n\t</div>\n\n\t\t</div>\n\n\t  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/discover/discover.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/discover/discover.component.ts ***!
  \***********************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _services_answers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/answers.service */ "./src/app/services/answers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_answers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/answers */ "./src/models/answers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DiscoverComponent = /** @class */ (function () {
    function DiscoverComponent(modalService, router, posts, answers, auth, http) {
        this.modalService = modalService;
        this.router = router;
        this.posts = posts;
        this.answers = answers;
        this.auth = auth;
        this.http = http;
        this.newAnswer = new _models_answers__WEBPACK_IMPORTED_MODULE_6__["Answers"]();
        //Obtiene todas las publicaciones de usuario al inicio
        this.getPosts();
    }
    DiscoverComponent.prototype.getPosts = function () {
        var _this = this;
        return this.posts.getposts()
            .subscribe(function (pposts) {
            _this.pposts = pposts;
        });
    };
    ;
    DiscoverComponent.prototype.reply = function (template, replyPost) {
        this.selectedPost = replyPost;
        this.newAnswer.id_answer = 0;
        this.newAnswer.text = "";
        this.newAnswer.price = 0;
        this.newAnswer.unlocked = false;
        this.newAnswer.valorated = false;
        this.newAnswer.id_owner = this.auth.getUserDetails().id_user;
        this.newAnswer.id_inpost = this.selectedPost.id_post;
        this.modalRef1 = this.modalService.show(template);
        this.modalRef1.hide();
    };
    DiscoverComponent.prototype.addreply = function (form) {
        var _this = this;
        if (form.value.text === "") {
            alert("Debe escribir una respuesta");
            return;
        }
        else if (form.value.price === "") {
            alert("Debe poner un precio");
            return;
        }
        else {
            var newAnswer = {
                id_answer: 0,
                text: form.value.text,
                price: form.value.price,
                unlocked: false,
                valorated: false,
                id_owner: this.auth.getUserDetails().id_user,
                id_inpost: this.selectedPost.id_post
            };
        }
        this.answers.addreply(this.newAnswer).subscribe(function () {
            _this.message = "Answers Published Successfully!";
            console.log(_this.message);
        }, function (err) {
            console.error(err);
        });
        this.modalRef1.hide();
    };
    DiscoverComponent.prototype.ngOnInit = function () {
    };
    DiscoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.component.html */ "./src/app/components/discover/discover.component.html"),
            styles: [__webpack_require__(/*! ../home/home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], _services_answers_service__WEBPACK_IMPORTED_MODULE_4__["AnswersService"], _auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], DiscoverComponent);
    return DiscoverComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid\n{\n\tbackground-color: #151515;\n\tcolor: #fff;\n}\n\na\n{\n\tcolor: grey;\n}\n\nimg\n{\n\twidth: 200px;\n\theight: 100px;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\t\n\t<div class=\"py-3\" >\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-6 p-3\">\n          <img src=\"assets/images/logo.png\">\n        </div>\n        <div class=\"col-lg-4 col-6 p-3\">\n          <p> <a href=\"https://goo.gl/maps/AUq7b9W7yYJ2\" target=\"_blank\"> Fake street, 100 <br>NYC - 20179, USA</a> </p>\n          <p> <a href=\"tel:+246 - 542 550 5462\">+1 - 256 845 87 86</a> </p>\n          <p class=\"mb-0\"> <a href=\"mailto:info@outlook.com\">info@outlook.com</a> </p>\n        </div>\n        <div class=\"col-md-4 p-3\">\n          <h5> <b>Acerca del servicio</b> </h5>\n          <p class=\"mb-0\"> ¿Problemas con sus dispositivos? ¡Encuentre las mejores soluciones de mano de nuestra gran comunidad!.</p>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <small class=\"mb-0 mt-2\">©2019 - Todos los derechos reservados</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-create, .btn-modify, .btn-delete\n{\n\tborder-radius: 60%;\n box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);\n}\n\n\n.notice {\n    padding: 15px;\n    background-color: #fafafa;\n    border-left: 6px solid #7f7f84;\n    margin-bottom: 10px;\n    box-shadow: #202123;\n}\n\n\n.notice-lg {\n    padding: 35px;\n    font-size: large;\n}\n\n\n.notice-success {\n    border-color: #80D651;\n}\n\n\n.notice-success>strong {\n    color: #80D651;\n}\n\n\n.notice-info {\n    /*border-color: #45ABCD;*/\n    border-color: #ac45cd;\n}\n\n\n.notice-info>strong {\n    /*color: #45ABCD;*/\n    color: #ac45cd;\n}\n\n\n.modal-header\n{\n    background: url('/assets/images/fondo.jpg') center top;\n    color: white;\n}\n\n\n.hidden \n{  \n    display: none;\n}\n\n\nhr \n{\n    background-color: azure;\n}\n\n\n.row \n{\n    padding: 20px;\n}\n\n\n/*Prop. para imágenes*/\n\n\n.img-content {\n    display: block;\n    width: 200px;\n    height: 200px;\n    margin-left: auto;\n    margin-right: auto;\n    border-radius: 50%;\n}\n\n\n.avatar\n{\n    display: block;\n    width: 300px;\n    height: 300px;\n    margin-left: auto;\n    margin-right: auto;    \n}\n\n\n.modal-body\n{\n    color: #151515;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Mis Publicaciones</h1>\n    <br>\n\n    <!--Agregue un nuevo post-->\n    <div class=\"containet text-center\">\n       \t<button type=\"button\" class=\"btn btn-success btn-create\" (click)=\"create(template1)\"\n        \ttooltip=\"Agregar nueva publicación\" placement=\"bottom\">\n      \t\t<i class=\"fas fa-plus fa-2x\"></i>\n  \t\t</button>\n    </div>\n    <hr>\n\n    <!--Visualización de tarjetas-->\n    <div class=\"container-fluid\" *ngFor=\"let post of pposts\">\n    \t<div class=\"notice notice-info notice-lg\">\n        \t<strong>{{post.title}}</strong>\n        \t<hr>\n        \t<img *ngIf=\"post.image!=null\" src=\"{{post.image}}\" class=\"img-fluid text-center avatar\">\n        \t<img *ngIf=\"post.image==null\" src=\"/assets/images/no-image.png\" class=\"img-fluid text-center avatar\">\n        \t<br>\n        \t<p>{{ post.description }}</p>\n\n        \t<div class=\"text-right\">\n\t        \t<!--&nbsp;-->\n\t        \t<!--button type=\"button\" class=\"btn btn-info btn-modify\" (click)=\"answer(template4)\"\n\t\t\t\t   tooltip=\"Ver detalles\" placement=\"bottom\">\n\t\t\t      \t<i class=\"far fa-eye\"></i>\n\t\t\t  \t</button-->\n\t\t\t\t&nbsp;\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-modify\" (click)=\"modify(template2, post)\"\n\t\t\t\t   tooltip=\"Modificar la publicación\" placement=\"bottom\">\n\t\t\t      \t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t  \t</button>\n\t\t\t  \t&nbsp;\n\t\t\t  \t<button type=\"button\" class=\"btn btn-danger btn-delete\" (click)=\"delet(template3, post)\"\n\t\t\t  \t\ttooltip=\"Eliminar la publicación\" placement=\"bottom\">\n\t\t\t      \t<i class=\"fas fa-trash-alt\"></i>\n\t\t\t  \t</button>\n        \t</div>\n    \t</div>\t\n\t</div>\n</div>\n\n<!--Modal para crear la publicación-->\n<ng-template #template1>\n\t<div class=\"modal-header\">\n\t    <h4 class=\"modal-title pull-left\">Crear nueva publicación</h4>\n\t    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef1.hide()\">\n\t      <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n\t</div>\n\n\t<div class=\"modal-body\">\n\t\t<div class=\"container text-center\">\t\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t\n\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t<img *ngIf=\"this.imageUrl==null\" src=\"/assets/images/no-image.png\" class=\"img-fluid img-circle img-thumbnail profile-pic img-content\">\n                    <img *ngIf=\"this.imageUrl!=null\" src={{this.imageUrl}} class=\"img-fluid img-circle img-thumbnail profile-pic img-content\">\n\t\t\t\t\t<h6>Seleccione la foto para el producto</h6>\n\t\t\t\t\t<br>\n\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"container\">\n\n\t\t\t\t\t\t<!--Barra de progreso-->\n\t\t\t\t\t\t<progressbar [value]=\"uploadProgress| async\" type=\"primary\" [striped]=\"true\" [animate]=\"true\"></progressbar>\n\n\t\t\t\t\t\t<!--Muestra el progreso de la barra-->\n\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\tProgress: {{ (uploadProgress | async) / 100 | percent }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n            \t\t\t<p>La foto se cargó correctamente</p>\n        \t\t\t\t</div>\n\n\t\t\t\t\t\t<!--Se sube una nueva foto para el usuario-->\n\t\t\t\t\t\t<div class=\"item\">\n\n\t\t\t\t\t\t\t<input #inputFile class=\"hidden\" type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"inputFile.click()\">\n\t\t\t\t\t\t\t\tSubir foto\n\t\t\t\t\t\t\t<i class=\"fas fa-upload\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\n\t\t\t\t<form #f=\"ngForm\" novalidate=\"\" method=\"POST\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<label for=\"name\"><h4>Título</h4></label>\n\t\t\t\t\t\t\t\t<input type=\"text\"  name=\"title\" class=\"form-control\"  placeholder=\"Nombre del Post\" [(ngModel)]=\"newPost.title\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<label for=\"descripcion\"><h4>Descripción</h4></label><br>\n\t\t\t\t\t\t\t\t<textarea type=\"text\" name=\"description\" placeholder=\"Descripcion del Post\" [(ngModel)]=\"newPost.description\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\" value=\"POST\" (click)=\"addpost(f)\" type=\"submit\">Crear Publicación\n\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t<button class=\"btn btn-cancelar btn-danger\" (click)=\"modalRef1.hide()\">Cancelar\n\t\t\t\t\t\t\t<i class=\"far fa-times-circle\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t</form>\n\t</div>\n\n\t\t</div>\n\n\t  </div>\n</ng-template>\n\n<!--Modal para modificar la publicación-->\n<ng-template #template2>\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title pull-left\">Modificar publicación</h4>\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef2.hide()\">\n\t  \t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t<div class=\"container text-center\">\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t\n\t\t\t\t<form #f=\"ngForm\" class=\"form\" id=\"ProductForm\">\n\t\t\t\t\t<img *ngIf=\"selectedPost.image==null\" src=\"/assets/images/no-image.png\" class=\"img-fluid img-circle img-thumbnail profile-pic img-content\">\n                    <img *ngIf=\"selectedPost.image!=null\" src={{selectedPost.image}} class=\"img-fluid img-circle img-thumbnail profile-pic img-content\">\n\t\t\t\t\t<h6>Seleccione la foto para el producto</h6>\n\t\t\t\t\t<br>\n\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<!--Barra de progreso-->\n\t\t\t\t\t\t<progressbar [value]=\"uploadProgress| async\" type=\"primary\" [striped]=\"true\" [animate]=\"true\"></progressbar>\n\n\t\t\t\t\t\t<!--Muestra el progreso de la barra-->\n\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\tProgress: {{ (uploadProgress | async) / 100 | percent }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n            \t\t\t<p>La foto se cargó correctamente</p>\n        \t\t\t\t</div>\n\t\t\t\t\t\t<!--Se sube una nueva foto para el usuario-->\n\t\t\t\t\t\t<div class=\"item\">\n\t\t\t\t\t\t\t\t<!--Selecciona un archivo .png o .jpg-->\n\t\t\t\t\t\t\t\t<input #inputFile class=\"hidden\" type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\">\n\t\t\t\t\t\t\t\t<!--Botón para poner en funcionamiento el input-->\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"inputFile.click()\">\n\t\t\t\t\t\t\t\tSubir foto\n\t\t\t\t\t\t\t\t<i class=\"fas fa-upload\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t\t<label for=\"name\"><h4>Título</h4></label>\n\t\t\t\t\t\t\t\t<input [(ngModel)]=\"nameValue\" #name=\"ngModel\" ngModel type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"{{selectedPost.title}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t\t\t<label for=\"descripcion\"><h4>Descripción</h4></label><br>\n\t\t\t\t\t\t\t<textarea [(ngModel)]=\"descriptionValue\" #descripcion=\"ngModel\" ngModel type=\"text\" class=\"form-control\" name=\"descripcion\" id=\"descripcion\" placeholder=\"{{selectedPost.description}}\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr>\n\t\t\t\t\t<div class=\"form-group text-center\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"update(f)\" type=\"submit\">Actualizar\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-sync-alt\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<br><br>\n\t\t\t\t\t\t\t<button class=\"btn btn-cancelar btn-danger\" (click)=\"modalRef2.hide()\">Cancelar\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"far fa-times-circle\"></i>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-template>\n\n<!--Modal para eliminar la publicación-->\n<ng-template #template3>\n\t<div class=\"modal-header\">\n\t\t<h4 class=\"modal-title pull-left\">Eliminar publicación</h4>\n\t    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef3.hide()\">\n\t      <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n\t</div>\n\t<div class=\"modal-body\">\n\t\t¿Desea borrar de forma permanente la publicación seleccionada?\n\t\t<br><br>\n\t\t<div class=\"text-center\">\n\t\t\t<button (click)=\"delete()\" class=\"btn btn-success\" type=\"button\">Sí</button>\n\t\t\t&nbsp;\n\t\t\t<button (click)=\"modalRef3.hide()\" class=\"btn btn-danger btn-cancelar\" type=\"button\">No</button>\n\t\t</div>\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_posts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/posts */ "./src/models/posts.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService, router, posts, auth, http, storage) {
        var _this = this;
        this.modalService = modalService;
        this.router = router;
        this.posts = posts;
        this.auth = auth;
        this.http = http;
        this.storage = storage;
        this.imageUrl = null;
        this.oldimageUrl = null;
        this.newPost = new _models_posts__WEBPACK_IMPORTED_MODULE_7__["Posts"]();
        //Obtiene todas las publicaciones de usuario al inicio
        var id = this.auth.getUserDetails().id_user;
        this.posts.getpostsOwner(id).subscribe(function (pposts) { return _this.pposts = pposts; });
    }
    HomeComponent.prototype.create = function (template) {
        this.newPost.id_post = 0;
        this.newPost.title = "";
        this.newPost.description = "";
        this.newPost.image = "";
        this.newPost.id_owner = this.auth.getUserDetails().id_user;
        this.newPost.publish_date = new Date();
        this.newPost.resolved = false;
        this.modalRef1 = this.modalService.show(template);
        this.modalRef1.hide();
    };
    HomeComponent.prototype.modify = function (template, editPost) {
        this.selectedPost = editPost;
        console.log(this.selectedPost);
        this.nameValue = this.selectedPost.title;
        this.descriptionValue = this.selectedPost.description;
        this.modalRef2 = this.modalService.show(template);
        this.modalRef2.hide();
    };
    HomeComponent.prototype.delet = function (template, deletePost) {
        this.selectedPost = deletePost;
        console.log(this.selectedPost);
        this.modalRef3 = this.modalService.show(template);
        this.modalRef3.hide();
    };
    HomeComponent.prototype.addpost = function (form) {
        var _this = this;
        if (form.value.title === "") {
            alert("Debe escribir un título");
            return;
        }
        else if (form.value.descripcion === "") {
            alert("Debe escribir una descripcion");
            return;
        }
        else {
            var newPost = {
                id_post: 0,
                title: form.value.name,
                description: form.value.descripcion,
                id_owner: this.auth.getUserDetails().id_user,
                publish_date: new Date(),
                resolved: false
            };
        }
        if (this.imageUrl != null) {
            this.newPost.image = this.imageUrl;
        }
        this.imageUrl = null;
        this.posts.addpost(this.newPost).subscribe(function () {
            _this.message = "Post Created Successfully!";
            console.log(_this.message);
        }, function (err) {
            console.error(err);
        });
        this.modalRef1.hide();
    };
    HomeComponent.prototype.update = function (form) {
        var _this = this;
        if (form.value.name != "") {
            this.selectedPost.title = form.value.name;
        }
        if (form.value.descripcion != "") {
            this.selectedPost.description = form.value.descripcion;
        }
        if (this.imageUrl != null) {
            this.oldimageUrl = this.selectedPost.image;
            this.selectedPost.image = this.imageUrl;
            //this.deleteImage(this.oldimageUrl);
            this.imageUrl = null;
        }
        console.log(this.selectedPost);
        this.posts.updatePost(this.selectedPost)
            .subscribe(function (result) { return _this.message = "Post Updated Successfully!"; });
        this.modalRef2.hide();
    };
    HomeComponent.prototype.delete = function () {
        var _this = this;
        this.posts.deletePost(this.selectedPost).subscribe(function () {
            _this.message = "Post Deleted Successfully!";
            console.log(_this.message);
        }, function (err) {
            console.error(err);
        });
        this.modalRef3.hide();
    };
    HomeComponent.prototype.upload = function (event) {
        var _this = this;
        // Obtiene la imagen:
        var file = event.target.files[0];
        // Genera un ID random para la imagen:
        var randomId = Math.random().toString(36).substring(2);
        var filepath = "Posts_Images/" + randomId;
        // Cargar imagen:
        var task = this.storage.upload(filepath, file);
        this.ref = this.storage.ref(filepath);
        // Observa los cambios en el % de la barra de progresos:
        this.uploadProgress = task.percentageChanges();
        // Notifica cuando la URL de descarga está disponible:
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this.downloadURL = _this.ref.getDownloadURL();
            _this.downloadURL.subscribe(function (url) { _this.imageUrl = url; });
            console.log(_this.imageUrl);
        })).subscribe();
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"], _auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* \n{\n    box-sizing: border-box;\n}\n\n.navbar-dark\n{\n    background-color:#151515;\n    text-align: center;\n}\n\n.logo\n{\n\twidth: 100px;\n\theight: 50px;\n    padding:6px;\t\n}\n\n.btn-dark\n{\n\tbackground-color: #151515;\n}\n\n.dropdown-menu, .dropdown-item:hover\n{\n\tbackground-color: #151515;\n\tcolor: #fff;\n}\n\n.dropdown-divider\n{\n\tborder-top: 1px solid #5a5a5a;\n}\n\na\n{\n\tcolor: grey;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark\" >\n  <div class=\"container-fluid\">\n\n    <a class=\"navbar-brand d-none d-md-block\" routerLink=\"/dashboard/home\">\n      <img class=\"logo\" src=\"assets/images/logo_1.png\">\n    </a>\n\n    <button class=\"collapsed navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n      \n    <div class=\"navbar-collapse collapse\" id=\"collapseBasic\" [collapse]=\"isCollapsed\">\n        <ul class=\"navbar-nav mx-auto\">\n          \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/home\">\n              <i class=\"fas fa-heart\"></i>\n              <br>\n              <small>Mis publicaciones</small>\n            </a>  \n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/notify\">\n              <i class=\"fas fa-bell\"></i>\n              <br>\n              <small>Notificaciones</small>\n            </a>  \n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/discover\">\n              <i class=\"fab fa-safari\"></i>\n              <br>\n              <small>Discover</small>\n            </a> \n          </li>\n\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/dashboard/answers\">\n              <i class=\"fas fa-comment-dots\"></i>\n              <br>\n              <small>Mis respuestas</small>\n            </a> \n          </li>\n        </ul>\n      \n\n      <ul class=\"navbar-nav text-center\">        \n          <li class=\"nav-item\"> \n            <a class=\"nav-link\" routerLink=\"/dashboard/profile\">\n              <i class=\"fas fa-user-cog\"></i>\n              <br><small>Perfil</small>\n            </a> </li>\n          <li class=\"nav-item\"> \n            <a class=\"nav-link\" routerLink=\"/start\" (click)=\"auth.logout()\">\n              <i class=\"fas fa-sign-out-alt\"></i>\n              <br><small>Cerrar sesión</small>\n            </a> \n          </li>\n\n      </ul>\n      </div>      \n\n    </div>    \n  </nav>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.isCollapsed = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notify/notify.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/notify/notify.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notify/notify.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/notify/notify.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notify works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/notify/notify.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/notify/notify.component.ts ***!
  \*******************************************************/
/*! exports provided: NotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyComponent", function() { return NotifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifyComponent = /** @class */ (function () {
    function NotifyComponent() {
    }
    NotifyComponent.prototype.ngOnInit = function () {
    };
    NotifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__(/*! ./notify.component.html */ "./src/app/components/notify/notify.component.html"),
            styles: [__webpack_require__(/*! ./notify.component.css */ "./src/app/components/notify/notify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotifyComponent);
    return NotifyComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img\n{\n    margin:3px;\n    padding:2px;\n    height: 250px;\n    width: 250px;\n    border-radius: 70%;\n}\n\n.box\n{\n    text-align: center;\n    color: #151515;\n    box-sizing: border-box;\n    background-color: #fafafa;\n    box-shadow: 0 5px 8px -6px rgba(0,0,0,.2);\n    padding: 15px;\n}\n\ninput \n{\n    width: 100%;\n    margin-bottom: 20px;\n}\n\ninput[type=\"text\"], input[type=\"password\"] \n{\n    outline: none;\n    height: 40px;\n    font-size: 16px;\n}\n\ninput[type=\"submit\"], input[type=\"button\"] \n{\n    border: none;\n    outline: none;\n    height: 40px;\n    color: azure;\n    font-size: 18px;\n}\n\nhr\n{\n    background-color: azure;\n}\n\n.hidden \n{  \n    display: none;\n}\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container box\">\n\n    <!--Imagen de Perfil-->\n    <div class=\"img-profile\">\n        <img class=\"img-fluid img-circle img-thumbnail\" *ngIf=\"this.auth.getUserDetails().image && this.imageUrl==null\" src=\"{{auth.getUserDetails().image}}\">\n        <img class=\"img-fluid img-circle img-thumbnail\" *ngIf=\"this.auth.getUserDetails().image == null && this.imageUrl==null\" src=\"/assets/images/sin-perfil.png\">\n        <img class=\"img-fluid profile-pic\" *ngIf=\"this.imageUrl!=null\" src={{this.imageUrl}} class=\"img-thumbnail img-circle img-fluid\">\n\n    </div>\n    <br>\n\n    <!--Para actualizar/añadir imagen de perfil a un usuario-->\n    <div class=\"container\">\n       <!--Barra de progreso-->\n       <progressbar [value]=\"uploadProgress| async\" type=\"primary\" [striped]=\"true\" [animate]=\"true\"></progressbar>\n\n        <!--Muestra el progreso de la barra-->\n        <div class=\"container\">\n            Progress: {{ (uploadProgress | async) / 100 | percent }}\n        </div>\n        <br>\n        <div *ngIf=\"downloadURL | async; let downloadSrc\" class=\"alert alert-info\" role=\"alert\">\n            <p>La foto se cargó correctamente</p>\n        </div>\n        <br>\n        <!--Se sube una nueva foto para el usuario-->\n        <div class=\"item\">\n            <!--Selecciona un archivo .png o .jpg-->\n            <input #inputFile class=\"hidden\" type=\"file\" (change)=\"upload($event)\" accept=\".png,.jpg\">\n            <!--Botón para poner en funcionamiento el input-->\n            <button type=\"button\" class=\"btn btn-lg btn-success\" (click)=\"inputFile.click()\">\n                Subir foto\n                <i class=\"fas fa-upload\"></i>\n            </button>\n        </div>\n    </div>\n\n    <!--Se muestran los otros datos del usuario-->\n    <div>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane active\" id=\"home\">\n            \t<hr>\n                   \t<form (ngSubmit)=\"editprofile(f)\" #f=\"ngForm\" novalidate=\"\" method=\"POST\">\n                        <div class=\"form-group\">\n                            <div class=\"col-xs-6\">\n                               \t<label for=\"first_name\"><h4>Nombre de Usuario</h4></label>\n                                <input type=\"text\" disabled\n                                placeholder=\"{{auth.getUserDetails()?.username  | titlecase}}\">\n                          \t</div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-xs-6\">\n                                <label for=\"email\"><h4>Email</h4></label>\n                                <input type=\"text\" disabled \n                                placeholder=\"{{auth.getUserDetails()?.email}}\">\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-xs-6\">\n                                <label for=\"description\"><h4>Descripción</h4></label>\n                                <input #description type=\"text\" class=\"form-control\" name=\"description\" \n                                id=\"description\" placeholder=\"{{auth.getUserDetails()?.description}}\" [(ngModel)]=\"credentials.description\" >\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"col-xs-12\">\n                                <br>\n                                <button class=\"btn btn-lg btn-success\" type=\"submit\">\n                                    Actualizar <i class=\"fas fa-sync-alt\"></i>\n                               \t</button>\n                            </div>\n                                </div>\n                    </form>\n                    <hr>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/authentication.service */ "./src/app/auth/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router, storage) {
        this.auth = auth;
        this.router = router;
        this.storage = storage;
        this.credentials = {
            description: '',
            image: ''
        };
        this.imageUrl = null;
        this.oldimageUrl = null;
    }
    ProfileComponent.prototype.editprofile = function (form) {
        var _this = this;
        if (this.imageUrl != null) {
            this.oldimageUrl = this.credentials.image;
            this.credentials.image = this.imageUrl;
            //this.deleteImage(this.oldimageUrl);
            this.imageUrl = null;
        }
        this.auth.editprofile(this.credentials, this.auth.getUserDetails().id_user).subscribe(function () {
            _this.router.navigateByUrl("/dashboard/home");
        }, function (err) {
            console.error(err);
        });
        ;
    };
    ProfileComponent.prototype.upload = function (event) {
        var _this = this;
        // Obtiene la imagen:
        var file = event.target.files[0];
        // Genera un ID random para la imagen:
        var randomId = Math.random().toString(36).substring(2);
        var filepath = "Avatars/" + randomId;
        // Cargar imagen:
        var task = this.storage.upload(filepath, file);
        this.ref = this.storage.ref(filepath);
        // Observa los cambios en el % de la barra de progresos:
        this.uploadProgress = task.percentageChanges();
        // Notifica cuando la URL de descarga está disponible:
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.downloadURL = _this.ref.getDownloadURL();
            _this.downloadURL.subscribe(function (url) { _this.imageUrl = url; });
        })).subscribe();
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/answers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/answers.service.ts ***!
  \*********************************************/
/*! exports provided: AnswersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersService", function() { return AnswersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswersService = /** @class */ (function () {
    function AnswersService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:3000/answers';
    }
    AnswersService.prototype.addreply = function (answer) {
        var url = " " + this.uri + "/add";
        console.log(answer);
        return this.http.post(url, answer);
    };
    ;
    AnswersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AnswersService);
    return AnswersService;
}());



/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.uri = 'http://localhost:3000/posts';
    }
    PostsService.prototype.addpost = function (post) {
        var url = " " + this.uri + "/add";
        console.log(post);
        return this.http.post(url, post);
    };
    ;
    PostsService.prototype.getposts = function () {
        var url = " " + this.uri + "/";
        return this.http.get(url);
    };
    ;
    PostsService.prototype.getpostsOwner = function (id) {
        var url = this.uri + "/" + id;
        return this.http.get(url);
    };
    PostsService.prototype.deletePost = function (post) {
        var url = " " + this.uri + "/delete/" + post.id_post;
        return this.http.delete(url);
    };
    PostsService.prototype.updatePost = function (post) {
        var url = " " + this.uri + "/update";
        return this.http.post(url, post);
    };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDdh_e6e51Bmbtqv4ueDqsYk4kxkjzC8E4",
        authDomain: "fixlab-storage.firebaseapp.com",
        projectId: "fixlab-storage",
        storageBucket: "fixlab-storage.appspot.com"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/answers.ts":
/*!*******************************!*\
  !*** ./src/models/answers.ts ***!
  \*******************************/
/*! exports provided: Answers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answers", function() { return Answers; });
var Answers = /** @class */ (function () {
    function Answers() {
    }
    return Answers;
}());



/***/ }),

/***/ "./src/models/posts.ts":
/*!*****************************!*\
  !*** ./src/models/posts.ts ***!
  \*****************************/
/*! exports provided: Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
var Posts = /** @class */ (function () {
    function Posts() {
        this.publish_date = new Date();
    }
    ;
    return Posts;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cesar/Desktop/Fixlab/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map