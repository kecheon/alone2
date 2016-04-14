import {Component} from 'angular2/core';
import {BidListComponent} from "./bid-list.component";
// import {BidDetailComponent} from "./bid-detail.component";
import {Bid} from "./bid";

@Component({
    selector: 'my-app',
    template: `
        <h1 class="text-warning">가자 별립산으로...</h1>
        <p>익숙함으로 부터 낯설음으로!</p>
        <bid-list></bid-list>
    `,
    directives: [BidListComponent]
})
export class AppComponent {
}

