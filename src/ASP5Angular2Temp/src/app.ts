import {Component, View, DynamicComponentLoader, Injector } from 'angular2/core';
import {TopNavComponent } from './layout/topnav';
import {MainComponent } from './layout/main';
import {FooterComponent } from './layout/footer';


@Component({
    selector: 'my-app',
    templateUrl: 'app.html' 
})

export class AppComponent {
    constructor(dcl: DynamicComponentLoader, injector: Injector) {
        dcl.loadAsRoot(TopNavComponent, '#topnav', injector);
        dcl.loadAsRoot(MainComponent, '#main', injector);
        dcl.loadAsRoot(MainComponent, '#footer', injector);
    }
}

      