/**
 * Created by cheon on 2016. 4. 12..
 */
import {Component, OnInit} from 'angular2/core';
import {BidListService} from './bid-list.service';
import {Bid} from "./bid";
import {BidDetailComponent} from "./bid-detail.component";

@Component({
    selector: 'bid-list',
    templateUrl: '../templates/bid-list.html',
    providers: [BidListService],
    directives: [BidDetailComponent] // bid-list.html template needs this to include it
})
export class BidListComponent implements onInit {
    bidListItems;
    selectedBid: Bid;
    constructor(private _bidListService: BidListService) {
        // Constructor 안에 method를 넣는 것은 문제가 많다. ngOnInit을 사용한다.
        // Constructor는 단순한 초기화 용도로 사용한다.
        // 테스팅에서 constructor를 사용하게 되는데 원치도 않는 method가 소리없이 실행될 수 있다.
        // this.bidListItems = _bidListService.getBidList();
    }
    onSelectedBid(bid: Bid) {
        this.selectedBid = bid;
    }
    ngOnInit() {
        this.getBidList();
    }
    getBidList() {
        this.bidListItems = this._bidListService.getBidList();
    }
}