"use strict";
/**
 * Created by dongs on 2/7/2017.
 */
//启动应用
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
//第一个Angualar 应用
var app_module_1 = require("./app.module");
//使用 ngFor 显示数组属性
var app_module_2 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
//第一个Angualar 应用
platform.bootstrapModule(app_module_1.AppModule);
//使用 ngFor 显示数组属性
platform.bootstrapModule(app_module_2.AppModuleNgFor);
//# sourceMappingURL=main.js.map