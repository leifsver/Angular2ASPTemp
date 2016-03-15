'use strict';

System.register(['angular2/platform/browser', './app', 'angular2/router', 'angular2/core'], function (_export, _context) {
    var bootstrap, AppComponent, ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy, provide;
    return {
        setters: [function (_angular2PlatformBrowser) {
            bootstrap = _angular2PlatformBrowser.bootstrap;
        }, function (_app) {
            AppComponent = _app.AppComponent;
        }, function (_angular2Router) {
            ROUTER_PROVIDERS = _angular2Router.ROUTER_PROVIDERS;
            APP_BASE_HREF = _angular2Router.APP_BASE_HREF;
            LocationStrategy = _angular2Router.LocationStrategy;
            HashLocationStrategy = _angular2Router.HashLocationStrategy;
        }, function (_angular2Core) {
            provide = _angular2Core.provide;
        }],
        execute: function () {

            bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQVE7O0FBQ0E7O0FBQ0E7QUFBa0I7QUFBZTtBQUFrQjs7QUFDbkQ7Ozs7QUFFUixzQkFBVSxZQUFWLEVBQXdCLENBQ3BCLGdCQURvQixFQUdwQixRQUFRLGdCQUFSLEVBQTBCLEVBQUUsVUFBVSxvQkFBVixFQUE1QixDQUhvQixDQUF4QiIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcCdcclxuaW1wb3J0IHtST1VURVJfUFJPVklERVJTLCBBUFBfQkFTRV9IUkVGLCBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneX0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJzsgXHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbIFxyXG4gICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgIC8vcHJvdmlkZShBUFBfQkFTRV9IUkVGLCB7IHVzZVZhbHVlOiAnLycgfSksXHJcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHsgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0pXHJcbl0pOyAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
