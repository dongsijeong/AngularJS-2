/**
 * Created by dongs on 2/7/2017.
 */
//创建组件并添加到应用中
/*
代码解析：
 以下代码从 angular2/core 引入了 Component 包。
 @Component 是 Angular 2 的装饰器 ，它会把一份元数据关联到 AppComponent 组件类上。
 my-app 是一个 CSS 选择器，可用在 HTML 标签中，作为一个组件使用。
 @view 包含了一个 template ，告诉 Angular 如何渲染该组件的视图。
 export 指定了组件可以再文件外使用。
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Site_1 = require("./Site");
//第一个Angualar 应用
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<h1>我的第一个 Angular 应用</h1>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//使用 ngFor 显示数组属性
var appComponentNgFor = (function () {
    function appComponentNgFor() {
        this.title = '站点列表';
        //sites = [ '菜鸟课程', 'Google', 'Taobao', 'Facebook' ];
        this.sites = [
            new Site_1.Site(1, '菜鸟课程'),
            new Site_1.Site(2, 'Google'),
            new Site_1.Site(3, 'Taobao'),
            new Site_1.Site(4, 'Facebook')
        ];
        this.mySite = this.sites[0];
    }
    return appComponentNgFor;
}());
appComponentNgFor = __decorate([
    core_1.Component({
        selector: 'my-ngFor',
        template: '<h1>{{title}}</h1>' +
            //'<h2>我喜欢的网站： {{mySite}}</h2>' +
            '<h2>我喜欢的网站： {{mySite.name}}</h2>' +
            '<p>网站列表</p>' +
            '<ul>' +
            '<li *ngFor="let site of sites">' +
            //'{{site}}' +
            '{{site.name}}' +
            '</li>' +
            '</ul>'
            + '<p *ngIf="sites.length > 3">你有很多个喜欢的网站!</p>'
    })
], appComponentNgFor);
exports.appComponentNgFor = appComponentNgFor;
//# sourceMappingURL=app.component.js.map