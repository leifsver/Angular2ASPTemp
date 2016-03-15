
import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from './crisis.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
    template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
  </div>
  `,
    styles: ['input {width: 20em}']
})

export class CrisisDetailComponent implements OnInit, CanDeactivate {

    crisis: Crisis;
    editName: string;
    service: CrisisService;
    router: Router;
    routeParams: RouteParams;
    constructor(
         _service: CrisisService,
         _router: Router,
         _routeParams: RouteParams
    ) {
        this.router = _router;
        this.service = _service;
        this.routeParams = _routeParams;
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.service.getCrisis(id).then(crisis => {
            if (crisis) {
                this.editName = crisis.name;
                this.crisis = crisis;
            } else { // id not found
                this.gotoCrises();
            }
        });
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): any {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
    }

    cancel() {
        this.editName = this.crisis.name;
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the hero id if available
        // so that the CrisisListComponent can select that hero.
        // Add a totally useless `foo` parameter for kicks.
        this.router.navigate(['CrisisList', { id: crisisId, foo: 'foo' }]);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/