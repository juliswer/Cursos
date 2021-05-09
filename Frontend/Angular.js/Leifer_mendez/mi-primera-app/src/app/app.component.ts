import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'mi-primera-app';
  public listadeVideos: Array<any> = []

  ngOnInit(): void {
    this.listadeVideos = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        image: 'https://i.ytimg.com/an_webp/51fF4pMK_iM/mqdefault_6s.webp?du=3000&sqp=CJjg24QG&rs=AOn4CLAtoN4gfQJXeSI7rfCKRpl49CFuCg'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        image: 'https://i.ytimg.com/an_webp/EbMi1Qj4rVE/mqdefault_6s.webp?du=3000&sqp=CKnr24QG&rs=AOn4CLCp4gw8uFT6FrMqmbBItPXoviDPFQ'
      },
      {
        title: 'Video 3',
        subtitle: 'Subtitle video 3',
        image: 'https://i.ytimg.com/an_webp/tkr5hsazoEM/mqdefault_6s.webp?du=3000&sqp=CI7324QG&rs=AOn4CLA2-uQH9ax8OimOTRnH7zwjCfos2Q'
      },
      {
        title: 'Video 4',
        subtitle: 'Subtitle video 4',
        image: 'https://i.ytimg.com/an_webp/UuTT3rOm3Vc/mqdefault_6s.webp?du=3000&sqp=CO_O24QG&rs=AOn4CLCrJMExIiRqZfL7NaALD5WlWxRVPw'
      },
      {
        title: 'Video 5',
        subtitle: 'Subtitle video 5',
        image: 'https://i.ytimg.com/an_webp/HtRZDWaAgRw/mqdefault_6s.webp?du=3000&sqp=CLzR24QG&rs=AOn4CLCx7-ISUzbDH5zjZrgs58dD2zXtZg'
      }
    ]
  }
}
