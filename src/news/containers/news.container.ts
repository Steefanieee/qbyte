import { Component } from "@angular/core";
import { NewsItem } from "../types/news-item";

@Component({
  selector: 'news',
  templateUrl: 'news.container.html',
  styleUrls: ['./news.container.scss'],
})
export class NewsContainer {
  newsItems: NewsItem[] = [
    {
      title: 'Title 1',
      message: 'Message 1',
      dateTime: '2020-05-13T20:00:00+02:00',
      photo: 'https://i.ytimg.com/vi/LVS7lbq-__g/maxresdefault.jpg'
    },
    {
      title: 'Title 2',
      dateTime: '2020-05-13T20:00:00+02:00',
      message: 'Message 2'
    }
  ]
}
