import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from 'app/joke';
import { JokeService } from 'app/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent  {
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() { }

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

}
