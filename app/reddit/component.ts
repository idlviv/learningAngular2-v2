import { Component } from '@angular/core';

@Component({
  selector: 'reddit',
  styleUrls: ['./app/reddit/reddit.css'],
  template: `
    <form class="ui large form segment">
        <h3 class="ui header">Добавити ще посилання</h3>
        <div class="field">
            <label for="title">Заголовок</label>
            <input type="text" name="title">
        </div>        
        <div class="field">
            <label for="link">Посилання</label>
            <input type="text" name="link">
        </div>
        <button class="ui positive right floated button" (click)="addArticle($event)">
            Відправити
        </button>
     </form>
  `
})
export class RedditAppComponent {
  addArticle(event: any) {
    console.log('pressed' + event);
  }
}