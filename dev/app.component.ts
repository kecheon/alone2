import {Component} from 'angular2/core';
import {BidListComponent} from "./bid-list.component";
import {BidListService} from "./bid-list.service"
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="text-warning">가자 별립산으로...</h1>
        <p>익숙함으로 부터 낯설음으로!</p>
        <a [routerLink]="['BidList']">공고목록</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, BidListComponent],
    providers: [ROUTER_PROVIDERS, BidListService]
})
@RouteConfig([
    {
        path: '/bid-list',
        name: 'BidList',
        component: BidListComponent
    }
])
export class AppComponent {
}

