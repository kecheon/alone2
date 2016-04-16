import {Component} from 'angular2/core';
import {BidListComponent} from "./bid-list.component";
import {BidListService} from "./bid-list.service"
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashBoardComponent} from "./dashboard.component";
import {BidDetailComponent} from "./bid-detail.component";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'my-app',
    template: `
        <h1 class="text-warning">가자 별립산으로...</h1>
        <p>익숙함으로 부터 낯설음으로!</p>
        <nav>
            <a [routerLink]="['Dashboard']">대시보드</a>
            <a [routerLink]="['BidList']">공고목록</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, BidListComponent],
    providers: [ROUTER_PROVIDERS, BidListService, HTTP_PROVIDERS]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashBoardComponent,
        useAsDefault: true
    },
    {
        path: '/bid-list',
        name: 'BidList',
        component: BidListComponent
    },
    {
        path: '/detail/:id',
        name: 'BidDetail',
        component: BidDetailComponent
    }
])
export class AppComponent {
}

