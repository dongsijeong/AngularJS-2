/**
 * Created by dongs on 2/7/2017.
 */
/*
Angular 本身是被拆成一些独立的 Angular 模块，这样我们在应用中只需要导入需要的 Angular 部分。
 每个 Angular 应用至少需要一个root module(根模块) ，实例中为 AppModule 。
 */
//第一个Angualar 应用
import {NgModule} from '@angular/core';
import {BrowserModule} from  '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule{}

//使用 ngFor 显示数组属性
import { appComponentNgFor } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ appComponentNgFor ],
    bootstrap: [ appComponentNgFor ]
})
export class AppModuleNgFor{}
