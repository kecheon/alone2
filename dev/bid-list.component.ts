/**
 * Created by cheon on 2016. 4. 12..
 */
import {Component} from 'angular2/core';
import {BidListService} from './bid-list.service';
import {Bid} from "./bid";
import {BidDetailComponent} from "./bid-detail.component";

@Component({
    selector: 'bid-list',
    templateUrl: '../templates/bid-list.html',
    providers: [BidListService],
    directives: [BidDetailComponent]
})
export class BidListComponent {
    bidListItems;
    selectedBid: Bid;
    constructor(bidListService: BidListService) {
        this.bidListItems = bidListService.getBidList();
    }
    onSelectedBid(bid: Bid) {
        this.selectedBid = bid;
    }
}