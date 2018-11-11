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
      title: 'Frag-o-Matic 2018',
      message: 'Our weekend at Frag-o-Matic went quite well! We have achieved some awesome results:\n' +
        '\n' +
        '- Counter Strike: Global Offensive semi pro [1st]\n' +
        '- Overwatch [2nd]\n' +
        '- Fortnite [3rd]\n' +
        '- Rocket League [4th]\n' +
        '\n' +
        'Let\'s go to the next tournament!\n' +
        '\n' +
        'Well played Qbyte! #teamQbyte',
      date: '2018-09-10',
      photo: 'https://i.ytimg.com/vi/LVS7lbq-__g/maxresdefault.jpg'
    },
    {
      title: 'FACTS 2018',
      date: '2018-09-25',
      message: 'Next weekend our Overwatch team will be present at FACTS... so be there or be square!\n' +
        '\n' +
        'Here\'s a little preview of what happened last time'
    },
    {
      title: 'Frag-o-Matic 2018',
      message: 'Our weekend at Frag-o-Matic went quite well! We have achieved some awesome results:\n' +
        '\n' +
        '- Counter Strike: Global Offensive semi pro [1st]\n' +
        '- Overwatch [2nd]\n' +
        '- Fortnite [3rd]\n' +
        '- Rocket League [4th]\n' +
        '\n' +
        'Let\'s go to the next tournament!\n' +
        '\n' +
        'Well played Qbyte! #teamQbyte',
      date: '2018-09-10',
      photo: 'https://i.ytimg.com/vi/LVS7lbq-__g/maxresdefault.jpg'
    },
    {
      title: 'FACTS 2018',
      date: '2018-09-25',
      message: 'Next weekend our Overwatch team will be present at FACTS... so be there or be square!\n' +
        '\n' +
        'Here\'s a little preview of what happened last time'
    }
  ]
}
