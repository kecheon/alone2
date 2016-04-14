import {Component, Input} from "angular2/core";
import {Bid} from "./bid";

@Component({
    selector: 'bid-detail',
    template: `
        <tr *ngIf="bid">
            <td colspan="3">
                <h3>{{ bid.name }}</h3>
            </td>
        </tr>
    `
})
export class BidDetailComponent {
    @Input()
    bid: Bid;
}