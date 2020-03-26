import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { JokeComponent } from 'app/joke/joke.component';
import { JokeService } from 'app/joke.service';

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


  constructor(
    private jokeService: JokeService
  ) {
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

 

}
