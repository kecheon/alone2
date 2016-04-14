/**
 * Created by cheon on 2016. 4. 13..
 */
import {Bid} from "./bid";
import {BIDS} from "./mock-bids"
import {Injectable} from "angular2/core";

@Injectable()
export class BidListService {
    getBidList() :Bid[] {
        return BIDS;
    }
}

