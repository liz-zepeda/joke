import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { Joke } from 'app/joke';
import { JokeComponent } from 'app/joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {
 
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  jokes: Joke[];

  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      // new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
    ];
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterViewInit jokeContentChild - ${this.jokeContentChild}`);
  }

  ngAfterViewInit(): void {
   console.log(`ngAfterViewInit jokeViewChild - ${this.jokeViewChild}`);
   const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
   console.log('ngAfterViewInit jokes', jokes);

   console.log('ngAfterViewInit headerEl', this.headerEl);
   this.headerEl.nativeElement.textContent = "Best thing ever!"

  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete,1);
    }
  }

}
