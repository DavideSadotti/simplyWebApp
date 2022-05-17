import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplyWebApp';

  //ARRAY CONTENENTE IL NOME DELLE PAGINE
  menu = [
    'demo',
    'shop',
    'product',
    'lookback',
    'blog'
  ]
}
