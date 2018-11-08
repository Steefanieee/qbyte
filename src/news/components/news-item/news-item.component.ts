import { Component, Input } from "@angular/core";
import { NewsItem } from "../../types/news-item";

@Component({
  selector: 'news-item',
  templateUrl: 'news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
  @Input() item: NewsItem;
}
