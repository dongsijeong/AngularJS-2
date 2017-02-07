"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by dongs on 2/7/2017.
 */
/*
Angular 本身是被拆成一些独立的 Angular 模块，这样我们在应用中只需要导入需要的 Angular 部分。
 每个 Angular 应用至少需要一个root module(根模块) ，实例中为 AppModule 。
 */
//第一个Angualar 应用
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//使用 ngFor 显示数组属性
var app_component_2 = require("./app.component");
var AppModuleNgFor = (function () {
    function AppModuleNgFor() {
    }
    return AppModuleNgFor;
}());
AppModuleNgFor = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_2.appComponentNgFor],
        bootstrap: [app_component_2.appComponentNgFor]
    })
], AppModuleNgFor);
exports.AppModuleNgFor = AppModuleNgFor;
//# sourceMappingURL=app.module.js.map