'use strict';

System.register(['angular2/core', 'angular2/router', './layout/topnav', './layout/main', './layout/footer', './recipes/recipe.component', './freezer/freezer.component', './skeleton/skeleton.component'], function (_export, _context) {
    var Component, View, DynamicComponentLoader, Injector, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, TopNavComponent, MainComponent, FooterComponent, RecipeComponent, FreezerComponent, SkeletonComponent, _dec, _dec2, _class, AppComponent;

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
        }, function (_angular2Router) {
            RouteConfig = _angular2Router.RouteConfig;
            RouterOutlet = _angular2Router.RouterOutlet;
            ROUTER_DIRECTIVES = _angular2Router.ROUTER_DIRECTIVES;
        }, function (_layoutTopnav) {
            TopNavComponent = _layoutTopnav.TopNavComponent;
        }, function (_layoutMain) {
            MainComponent = _layoutMain.MainComponent;
        }, function (_layoutFooter) {
            FooterComponent = _layoutFooter.FooterComponent;
        }, function (_recipesRecipeComponent) {
            RecipeComponent = _recipesRecipeComponent.RecipeComponent;
        }, function (_freezerFreezerComponent) {
            FreezerComponent = _freezerFreezerComponent.FreezerComponent;
        }, function (_skeletonSkeletonComponent) {
            SkeletonComponent = _skeletonSkeletonComponent.SkeletonComponent;
        }],
        execute: function () {
            _export('AppComponent', AppComponent = (_dec = Component({
                selector: 'my-app',
                template: '<topnav id="topnav"></topnav><router-outlet></router-outlet><app-footer id="footer"></app-footer><a [routerLink]="[\'Skeleton\']">Skeleton</a><my-component id="my-component"></my-component>',
                directives: [ROUTER_DIRECTIVES]
            }), _dec2 = RouteConfig([{ path: '/home', component: MainComponent, name: 'Home', useAsDefault: true }, { path: '/recipes', name: 'Recipes', component: RecipeComponent }, { path: '/freezer', name: 'Freezer', component: FreezerComponent }, { path: '/skeleton/', name: 'Skeleton', component: SkeletonComponent }, { path: '/**', redirectTo: ['Home'] }]), _dec(_class = _dec2(_class = function AppComponent(dcl, injector) {
                _classCallCheck(this, AppComponent);

                this.test = this.test;

                dcl.loadAsRoot(TopNavComponent, '#topnav', injector);

                dcl.loadAsRoot(FooterComponent, '#footer', injector);

                this.test = "BLÆÆÆÆÆ";
            }) || _class) || _class));

            _export('AppComponent', AppComponent);

            Reflect.defineMetadata('design:paramtypes', [DynamicComponentLoader, Injector], AppComponent);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7QUFBVztBQUFNO0FBQXdCOztBQUN6QztBQUFhO0FBQWM7O0FBQzNCOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7b0NBZ0JLLHVCQWRaLFVBQVU7QUFDUCwwQkFBVSxRQUFWO0FBQ0EsMEJBQVMsK0xBQVQ7QUFDQSw0QkFBWSxDQUFDLGlCQUFELENBQVo7YUFISCxXQU1BLFlBQVksQ0FDTCxFQUFFLE1BQU0sT0FBTixFQUFlLFdBQVcsYUFBWCxFQUEwQixNQUFNLE1BQU4sRUFBYyxjQUFjLElBQWQsRUFEcEQsRUFFTCxFQUFFLE1BQU0sVUFBTixFQUFrQixNQUFNLFNBQU4sRUFBaUIsV0FBVyxlQUFYLEVBRmhDLEVBR0wsRUFBRSxNQUFNLFVBQU4sRUFBa0IsTUFBTSxTQUFOLEVBQWlCLFdBQVcsZ0JBQVgsRUFIaEMsRUFJVCxFQUFFLE1BQU0sWUFBTixFQUFvQixNQUFNLFVBQU4sRUFBa0IsV0FBVyxpQkFBWCxFQUovQixFQUtULEVBQUUsTUFBTSxLQUFOLEVBQWEsWUFBWSxDQUFDLE1BQUQsQ0FBWixFQUxOLENBQVosZ0NBVUcsU0FGUyxZQUVULENBQVksR0FBWixFQUF5QyxRQUF6QyxFQUE2RDtzQ0FGcEQsY0FFb0Q7O3FCQUQ3RCxpQkFDNkQ7O0FBQ3pELG9CQUFJLFVBQUosQ0FBZSxlQUFmLEVBQWdDLFNBQWhDLEVBQTJDLFFBQTNDLEVBRHlEOztBQUd6RCxvQkFBSSxVQUFKLENBQWUsZUFBZixFQUFnQyxTQUFoQyxFQUEyQyxRQUEzQyxFQUh5RDs7QUFLekQscUJBQUssSUFBTCxHQUFZLFNBQVosQ0FMeUQ7YUFBN0Q7Ozs7eURBQWlCLHdCQUFrQyxXQUYxQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldywgRHluYW1pY0NvbXBvbmVudExvYWRlciwgSW5qZWN0b3IgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC90b3BuYXYnO1xyXG5pbXBvcnQge01haW5Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC9tYWluJztcclxuaW1wb3J0IHtGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC9mb290ZXInO1xyXG5pbXBvcnQge1JlY2lwZUNvbXBvbmVudH0gZnJvbSAnLi9yZWNpcGVzL3JlY2lwZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZyZWV6ZXJDb21wb25lbnR9IGZyb20gJy4vZnJlZXplci9mcmVlemVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2tlbGV0b25Db21wb25lbnR9IGZyb20gJy4vc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6Jzx0b3BuYXYgaWQ9XCJ0b3BuYXZcIj48L3RvcG5hdj48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+PGFwcC1mb290ZXIgaWQ9XCJmb290ZXJcIj48L2FwcC1mb290ZXI+PGEgW3JvdXRlckxpbmtdPVwiW1xcJ1NrZWxldG9uXFwnXVwiPlNrZWxldG9uPC9hPjxteS1jb21wb25lbnQgaWQ9XCJteS1jb21wb25lbnRcIj48L215LWNvbXBvbmVudD4nLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICAgICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQsIG5hbWU6ICdIb21lJywgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcbiAgICAgICAgeyBwYXRoOiAnL3JlY2lwZXMnLCBuYW1lOiAnUmVjaXBlcycsIGNvbXBvbmVudDogUmVjaXBlQ29tcG9uZW50IH0sXHJcbiAgICAgICAgeyBwYXRoOiAnL2ZyZWV6ZXInLCBuYW1lOiAnRnJlZXplcicsIGNvbXBvbmVudDogRnJlZXplckNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL3NrZWxldG9uLycsIG5hbWU6ICdTa2VsZXRvbicsIGNvbXBvbmVudDogU2tlbGV0b25Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnSG9tZSddIH1cclxuXSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gICAgdGVzdDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoZGNsOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBkY2wubG9hZEFzUm9vdChUb3BOYXZDb21wb25lbnQsICcjdG9wbmF2JywgaW5qZWN0b3IpO1xyXG4gICAgICAgIC8vZGNsLmxvYWRBc1Jvb3QoTWFpbkNvbXBvbmVudCwgJyNtYWluJywgaW5qZWN0b3IpO1xyXG4gICAgICAgIGRjbC5sb2FkQXNSb290KEZvb3RlckNvbXBvbmVudCwgJyNmb290ZXInLCBpbmplY3Rvcik7XHJcblxyXG4gICAgICAgIHRoaXMudGVzdCA9IFwiQkzDhsOGw4bDhsOGXCI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4gICAgICAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
