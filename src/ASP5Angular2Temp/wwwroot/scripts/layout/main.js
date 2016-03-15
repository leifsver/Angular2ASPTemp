'use strict';

System.register(['angular2/core', 'angular2/router'], function (_export, _context) {
    var Component, View, provide, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, _dec, _class, MainComponent;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_angular2Core) {
            Component = _angular2Core.Component;
            View = _angular2Core.View;
            provide = _angular2Core.provide;
        }, function (_angular2Router) {
            ROUTER_DIRECTIVES = _angular2Router.ROUTER_DIRECTIVES;
            ROUTER_PROVIDERS = _angular2Router.ROUTER_PROVIDERS;
            LocationStrategy = _angular2Router.LocationStrategy;
            HashLocationStrategy = _angular2Router.HashLocationStrategy;
        }],
        execute: function () {
            _export('MainComponent', MainComponent = (_dec = Component({
                selector: 'main',
                template: '<a name="about"></a><div class="intro-header"><div class="container"><div class="row"><div class="col-lg-12"><div class="intro-message"><h1>Hjemmesenter</h1><h3>Leif-Sverre og Thea</h3><hr class="intro-divider"><ul class="list-inline intro-social-buttons"><li><a [routerLink]="[\'Recipes\']" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Oppskrifter</span></a></li><li><a [routerLink]="[\'Freezer\']" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Fryserindeks</span></a></li><li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Bilder</span></a></li></ul></div></div></div></div></div><a name="services"></a><div class="content-section-a"><div class="container"><div class="row"><div class="col-lg-5 col-sm-6"><hr class="section-heading-spacer"><div class="clearfix"></div><h2 class="section-heading">Velkommen hjem:<br></h2><p class="lead">Håper du har hatt en god nattevakt! Sov godt og drøm søtt. Her er en trøtt sel:</p></div><div class="col-lg-5 col-lg-offset-2 col-sm-6"><img style="border: 10px solid black; border-radius: 6px;" class="img-responsive" src="resources/img/seal_tired.jpg"></div></div></div></div><div class="content-section-b"><div class="container"><div class="row"><div class="col-lg-5 col-lg-offset-1 col-sm-push-6 col-sm-6"><hr class="section-heading-spacer"><div class="clearfix"></div><h2 class="section-heading">Eksempel<br>eksempel</h2><p class="lead">Test <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p></div><div class="col-lg-5 col-sm-pull-6 col-sm-6"><img style="border: 10px solid black; border-radius: 6px;" class="img-responsive" src="resources/img/mountain_sun.jpg"></div></div></div></div><div class="content-section-a"><div class="container"><div class="row"><div class="col-lg-5 col-sm-6"><hr class="section-heading-spacer"><div class="clearfix"></div><h2 class="section-heading">Google Web Fonts and<br>Font Awesome Icons</h2></div><div class="col-lg-5 col-lg-offset-2 col-sm-6"><img class="img-responsive" src="resources/img/phones.png"></div></div></div></div><a name="contact"></a><div class="banner"><div class="container"><div class="row"><div class="col-lg-6"><h2>Connect to Start Bootstrap:</h2></div><div class="col-lg-6"><ul class="list-inline banner-social-buttons"><li></li><li><a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a></li><li><a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a></li></ul></div></div></div></div>',
                directives: [ROUTER_DIRECTIVES]

            }), _dec(_class = function MainComponent() {
                _classCallCheck(this, MainComponent);
            }) || _class));

            _export('MainComponent', MainComponent);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDUTtBQUFXO0FBQU07O0FBQ2pCO0FBQW1CO0FBQWtCO0FBQWtCOzs7cUNBUWxELHdCQVBaLFVBQVU7QUFDUCwwQkFBVSxNQUFWO0FBQ0EsMEJBQVMsMndGQUFUO0FBQ0EsNEJBQVksQ0FBQyxpQkFBRCxDQUFaOzthQUhILDBCQU9ZIiwiZmlsZSI6ImxheW91dC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUywgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYWluJyxcclxuICAgIHRlbXBsYXRlOic8YSBuYW1lPVwiYWJvdXRcIj48L2E+PGRpdiBjbGFzcz1cImludHJvLWhlYWRlclwiPjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj48ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPjxkaXYgY2xhc3M9XCJpbnRyby1tZXNzYWdlXCI+PGgxPkhqZW1tZXNlbnRlcjwvaDE+PGgzPkxlaWYtU3ZlcnJlIG9nIFRoZWE8L2gzPjxociBjbGFzcz1cImludHJvLWRpdmlkZXJcIj48dWwgY2xhc3M9XCJsaXN0LWlubGluZSBpbnRyby1zb2NpYWwtYnV0dG9uc1wiPjxsaT48YSBbcm91dGVyTGlua109XCJbXFwnUmVjaXBlc1xcJ11cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXIgZmEtZndcIj48L2k+IDxzcGFuIGNsYXNzPVwibmV0d29yay1uYW1lXCI+T3Bwc2tyaWZ0ZXI8L3NwYW4+PC9hPjwvbGk+PGxpPjxhIFtyb3V0ZXJMaW5rXT1cIltcXCdGcmVlemVyXFwnXVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPjxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViIGZhLWZ3XCI+PC9pPiA8c3BhbiBjbGFzcz1cIm5ldHdvcmstbmFtZVwiPkZyeXNlcmluZGVrczwvc3Bhbj48L2E+PC9saT48bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluIGZhLWZ3XCI+PC9pPiA8c3BhbiBjbGFzcz1cIm5ldHdvcmstbmFtZVwiPkJpbGRlcjwvc3Bhbj48L2E+PC9saT48L3VsPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxhIG5hbWU9XCJzZXJ2aWNlc1wiPjwvYT48ZGl2IGNsYXNzPVwiY29udGVudC1zZWN0aW9uLWFcIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cInJvd1wiPjxkaXYgY2xhc3M9XCJjb2wtbGctNSBjb2wtc20tNlwiPjxociBjbGFzcz1cInNlY3Rpb24taGVhZGluZy1zcGFjZXJcIj48ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj48aDIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5WZWxrb21tZW4gaGplbTo8YnI+PC9oMj48cCBjbGFzcz1cImxlYWRcIj5Iw6VwZXIgZHUgaGFyIGhhdHQgZW4gZ29kIG5hdHRldmFrdCEgU292IGdvZHQgb2cgZHLDuG0gc8O4dHQuIEhlciBlciBlbiB0csO4dHQgc2VsOjwvcD48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLWxnLTUgY29sLWxnLW9mZnNldC0yIGNvbC1zbS02XCI+PGltZyBzdHlsZT1cImJvcmRlcjogMTBweCBzb2xpZCBibGFjazsgYm9yZGVyLXJhZGl1czogNnB4O1wiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJyZXNvdXJjZXMvaW1nL3NlYWxfdGlyZWQuanBnXCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImNvbnRlbnQtc2VjdGlvbi1iXCI+PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJyb3dcIj48ZGl2IGNsYXNzPVwiY29sLWxnLTUgY29sLWxnLW9mZnNldC0xIGNvbC1zbS1wdXNoLTYgY29sLXNtLTZcIj48aHIgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmctc3BhY2VyXCI+PGRpdiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+PGgyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nXCI+RWtzZW1wZWw8YnI+ZWtzZW1wZWw8L2gyPjxwIGNsYXNzPVwibGVhZFwiPlRlc3QgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cucHNkY292ZXJzLmNvbS9cIj5QU0RDb3ZlcnM8L2E+ISBWaXNpdCB0aGVpciB3ZWJzaXRlIHRvIGRvd25sb2FkIHNvbWUgb2YgdGhlaXIgYXdlc29tZSwgZnJlZSBwaG90b3Nob3AgYWN0aW9ucyE8L3A+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC1sZy01IGNvbC1zbS1wdWxsLTYgY29sLXNtLTZcIj48aW1nIHN0eWxlPVwiYm9yZGVyOiAxMHB4IHNvbGlkIGJsYWNrOyBib3JkZXItcmFkaXVzOiA2cHg7XCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInJlc291cmNlcy9pbWcvbW91bnRhaW5fc3VuLmpwZ1wiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJjb250ZW50LXNlY3Rpb24tYVwiPjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj48ZGl2IGNsYXNzPVwicm93XCI+PGRpdiBjbGFzcz1cImNvbC1sZy01IGNvbC1zbS02XCI+PGhyIGNsYXNzPVwic2VjdGlvbi1oZWFkaW5nLXNwYWNlclwiPjxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PjxoMiBjbGFzcz1cInNlY3Rpb24taGVhZGluZ1wiPkdvb2dsZSBXZWIgRm9udHMgYW5kPGJyPkZvbnQgQXdlc29tZSBJY29uczwvaDI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC1sZy01IGNvbC1sZy1vZmZzZXQtMiBjb2wtc20tNlwiPjxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInJlc291cmNlcy9pbWcvcGhvbmVzLnBuZ1wiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjxhIG5hbWU9XCJjb250YWN0XCI+PC9hPjxkaXYgY2xhc3M9XCJiYW5uZXJcIj48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cInJvd1wiPjxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPjxoMj5Db25uZWN0IHRvIFN0YXJ0IEJvb3RzdHJhcDo8L2gyPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPjx1bCBjbGFzcz1cImxpc3QtaW5saW5lIGJhbm5lci1zb2NpYWwtYnV0dG9uc1wiPjxsaT48L2xpPjxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0lyb25TdW1taXRNZWRpYS9zdGFydGJvb3RzdHJhcFwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPjxpIGNsYXNzPVwiZmEgZmEtZ2l0aHViIGZhLWZ3XCI+PC9pPiA8c3BhbiBjbGFzcz1cIm5ldHdvcmstbmFtZVwiPkdpdGh1Yjwvc3Bhbj48L2E+PC9saT48bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluIGZhLWZ3XCI+PC9pPiA8c3BhbiBjbGFzcz1cIm5ldHdvcmstbmFtZVwiPkxpbmtlZGluPC9zcGFuPjwvYT48L2xpPjwvdWw+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+JyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
