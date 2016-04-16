/**
 * Created by cheon on 2016. 4. 15..
 */

import {Component} from "angular2/core";
import {BidListComponent} from "./bid-list.component";

@Component({
    selector: 'dashboard',
    templateUrl: '../templates/dashboard.component.html',
    directives: [BidListComponent]
})

export class DashBoardComponent {
}
