import {Component, View, DynamicComponentLoader, Injector } from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {TopNavComponent } from './layout/topnav';
import {MainComponent } from './layout/main';
import {FooterComponent } from './layout/footer';
import {RecipeComponent} from './recipes/recipe.component';
import {FreezerComponent} from './freezer/freezer.component';
import {SkeletonComponent} from './skeleton/skeleton.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
        { path: '/home', component: MainComponent, name: 'Home', useAsDefault: true },
        { path: '/recipes', name: 'Recipes', component: RecipeComponent },
        { path: '/freezer', name: 'Freezer', component: FreezerComponent },
    { path: '/skeleton/', name: 'Skeleton', component: SkeletonComponent },
    { path: '/**', redirectTo: ['Home'] }
])

export class AppComponent {
    test: string;
    constructor(dcl: DynamicComponentLoader, injector: Injector) {
        dcl.loadAsRoot(TopNavComponent, '#topnav', injector);
        //dcl.loadAsRoot(MainComponent, '#main', injector);
        dcl.loadAsRoot(FooterComponent, '#footer', injector);

        this.test = "BLÆÆÆÆÆ";
    }

}

      