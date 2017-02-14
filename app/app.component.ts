import { Component } from '@angular/core';

@Component({
  selector: 'reddit',
  styleUrls: ['./app/app.style.css'],
  template: `
    <form class="ui large form segment">
        <h3 class="ui header">Добавити ще посилання</h3>
        <div class="field">
            <label for="title">Заголовок</label>
            <input type="text" name="title" #titleValue>
        </div>        
        <div class="field">
            <label for="link">Посилання</label>
            <input type="text" name="link" #linkValue>
        </div>
        <button class="ui positive right floated button" (click)="addArticle($event, titleValue, linkValue)">
            Відправити
        </button>
     </form>
  `
})
export class RedditAppComponent {
  addArticle(event: any, titleValue: HTMLInputElement, linkValue: HTMLInputElement) {
    console.log(event);
    console.log(titleValue.value);
    console.log(linkValue.value);
    return false;
  }
}