/**
 * Created by cheon on 2016. 4. 13..
 */
import {Bid} from "./bid";
import {BIDS} from "./mock-bids"
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class BidListService {
    constructor(private _http: Http) {}
    
    getBidListHttp() {
        return this._http.get('http://localhost:8000/rest/bids')
            .map(res => res.json());
    }
    
    getBidHttp(id: number) {
    
    }

    getBidList() {
        return Promise.resolve(BIDS);
    }
    getBid(id: number) {
        return Promise.resolve(BIDS).then(
            bidListItems => bidListItems.filter(bid => bid.id === id)[0]
        );
    }
}