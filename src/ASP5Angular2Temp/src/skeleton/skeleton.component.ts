
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Crisis, SkeletonService} from './skeleton.service';

@Component({
    templateUrl: "skeleton.component.html",
    bindings: [Crisis,SkeletonService]
})
export class SkeletonComponent implements OnInit {
    selectedId: number;
    crises: Crisis[]; 
    service: SkeletonService;

    constructor(
        _service: SkeletonService,
        _router: Router,
        routeParams: RouteParams) {
        this.selectedId = +routeParams.get('id');
        this.service = _service;
    }

    ngOnInit() {
        this.service.getCrises().then(crises => this.crises = crises);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/