import {Component, Input, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {BidListService} from "./bid-list.service";
import {Bid} from "./bid";

@Component({
    selector: 'bid-detail',
    template: `
        <tr *ngIf="bid">
            <td colspan="2">
                <h3>{{ bid.name }}의 공고서</h3>
            </td>
            <td><button (click)="goBack()">뒤로</button></td>
        </tr>
    `
})
export class BidDetailComponent implements OnInit {
    @Input()
    bid: Bid;
    constructor(
        private _bidListService: BidListService,
        private _routeParams: RouteParams
    ) {}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._bidListService.getBid(id).then(bid => this.bid = bid);
    }

    goBack() {
        window.history.back();
    }
}