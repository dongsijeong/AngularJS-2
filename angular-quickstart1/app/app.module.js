/**
 * Created by dongs on 2/7/2017.
 */
(function (app) {
    app.AppModule =
        ng.core.NgModule({
            imports: [ ng.platformBrowser.BrowserModule ],
            declarations: [ app.AppComponent ],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function(){}
        });
}) (window.app || (window.app = {}));