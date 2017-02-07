/**
 * Created by dongs on 2/7/2017.
 */
//启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//第一个Angualar 应用
import { AppModule } from './app.module';
//使用 ngFor 显示数组属性
import {AppModuleNgFor} from './app.module';

const platform = platformBrowserDynamic();
//第一个Angualar 应用
platform.bootstrapModule(AppModule);
//使用 ngFor 显示数组属性
platform.bootstrapModule(AppModuleNgFor);
