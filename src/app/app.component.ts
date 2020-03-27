import { Component } from '@angular/core';
import { Joke } from './joke';
import { JokeService } from './joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private jokeService: JokeService
  ) {
  }
  joke: Joke = new Joke(
    'A kid threw a lump of cheddar at me',
    'I thought ‘That’s not very mature’'
  );
}
