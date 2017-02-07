/**
 * Created by dongs on 2/7/2017.
 */

(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
       ng.platformBrowserDynamic
         .platformBrowserDynamic()
         .bootstrapModule(app.AppModule);
    });
}) (window.app || (window.app = {}));