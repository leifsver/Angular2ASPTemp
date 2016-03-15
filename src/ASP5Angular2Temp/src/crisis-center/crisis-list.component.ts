
import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from './crisis.service';
import {Router, RouteParams} from 'angular2/router';

@Component({
    template: `
    <ul class="items">
      <li *ngFor="#crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnInit {
    crises: Crisis[];

    _selectedId: number;
    service: CrisisService;
    router: Router;

    constructor(
         _service: CrisisService,
         _router: Router,
        routeParams: RouteParams) {
        this._selectedId = +routeParams.get('id');
        this.router = _router;
        this.service = _service;
    }

    isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }

    ngOnInit() {
        this.service.getCrises().then(crises => this.crises = crises);
    }

    onSelect(crisis: Crisis) {
        this.router.navigate(['CrisisDetail', { id: crisis.id }]);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/