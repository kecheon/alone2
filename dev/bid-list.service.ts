/**
 * Created by cheon on 2016. 4. 13..
 */
import {Bid} from "./bid";

export class BidListService {
    getBidList() :Bid[] {
        return BIDS;
    }
}

var BIDS : Bid[] = [
    {id: 1, name: '공고1', number: '20161234567', estimation: 1000000000},
    {id: 2, name: '공고2', number: '20161234567', estimation: 1000000000},
    {id: 3, name: '공고3', number: '20161234567', estimation: 1000000000},
    {id: 4, name: '공고4', number: '20161234567', estimation: 1000000000},
];