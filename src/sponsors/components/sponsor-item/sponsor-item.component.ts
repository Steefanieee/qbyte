import { Component, Input } from "@angular/core";
import { Sponsor } from "../../types/sponsor";

@Component({
  selector: 'sponsor-item',
  templateUrl: 'sponsor-item.component.html',
  styleUrls: ['./sponsor-item.component.scss'],
})
export class SponsorItemComponent {
  @Input() item: Sponsor;
}
