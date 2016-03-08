'use strict';

System.register(['angular2/core', './layout/topnav', './layout/main', './layout/footer'], function (_export, _context) {
    var Component, View, DynamicComponentLoader, Injector, TopNavComponent, MainComponent, FooterComponent, _dec, _class, AppComponent;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_angular2Core) {
            Component = _angular2Core.Component;
            View = _angular2Core.View;
            DynamicComponentLoader = _angular2Core.DynamicComponentLoader;
            Injector = _angular2Core.Injector;
        }, function (_layoutTopnav) {
            TopNavComponent = _layoutTopnav.TopNavComponent;
        }, function (_layoutMain) {
            MainComponent = _layoutMain.MainComponent;
        }, function (_layoutFooter) {
            FooterComponent = _layoutFooter.FooterComponent;
        }],
        execute: function () {
            _export('AppComponent', AppComponent = (_dec = Component({
                selector: 'my-app',
                template: '<topnav id="topnav"></topnav><main id="main"></main><app-footer id="app-footer"></app-footer>'
            }), _dec(_class = function AppComponent(dcl, injector) {
                _classCallCheck(this, AppComponent);

                dcl.loadAsRoot(TopNavComponent, '#topnav', injector);
                dcl.loadAsRoot(MainComponent, '#main', injector);
                dcl.loadAsRoot(MainComponent, '#footer', injector);
            }) || _class));

            _export('AppComponent', AppComponent);

            Reflect.defineMetadata('design:paramtypes', [DynamicComponentLoader, Injector], AppComponent);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7QUFBVztBQUFNO0FBQXdCOztBQUN6Qzs7QUFDQTs7QUFDQTs7O29DQVFLLHVCQUxaLFVBQVU7QUFDUCwwQkFBVSxRQUFWO0FBQ0EsMEJBQVMsK0ZBQVQ7YUFGSCxpQkFNRyxTQURTLFlBQ1QsQ0FBWSxHQUFaLEVBQXlDLFFBQXpDLEVBQTZEO3NDQURwRCxjQUNvRDs7QUFDekQsb0JBQUksVUFBSixDQUFlLGVBQWYsRUFBZ0MsU0FBaEMsRUFBMkMsUUFBM0MsRUFEeUQ7QUFFekQsb0JBQUksVUFBSixDQUFlLGFBQWYsRUFBOEIsT0FBOUIsRUFBdUMsUUFBdkMsRUFGeUQ7QUFHekQsb0JBQUksVUFBSixDQUFlLGFBQWYsRUFBOEIsU0FBOUIsRUFBeUMsUUFBekMsRUFIeUQ7YUFBN0Q7Ozs7eURBQWlCLHdCQUFrQyxXQUQxQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgRHluYW1pY0NvbXBvbmVudExvYWRlciwgSW5qZWN0b3IgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC90b3BuYXYnO1xyXG5pbXBvcnQge01haW5Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC9tYWluJztcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9mb290ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6Jzx0b3BuYXYgaWQ9XCJ0b3BuYXZcIj48L3RvcG5hdj48bWFpbiBpZD1cIm1haW5cIj48L21haW4+PGFwcC1mb290ZXIgaWQ9XCJhcHAtZm9vdGVyXCI+PC9hcHAtZm9vdGVyPicgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKGRjbDogRHluYW1pY0NvbXBvbmVudExvYWRlciwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgZGNsLmxvYWRBc1Jvb3QoVG9wTmF2Q29tcG9uZW50LCAnI3RvcG5hdicsIGluamVjdG9yKTtcclxuICAgICAgICBkY2wubG9hZEFzUm9vdChNYWluQ29tcG9uZW50LCAnI21haW4nLCBpbmplY3Rvcik7XHJcbiAgICAgICAgZGNsLmxvYWRBc1Jvb3QoTWFpbkNvbXBvbmVudCwgJyNmb290ZXInLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
