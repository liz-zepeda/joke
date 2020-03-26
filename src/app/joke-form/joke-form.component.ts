import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from 'app/joke';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent extends OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  myForm: FormGroup;
  setup: FormControl;
  punchline: FormControl;

  ngOnInit() {
   this.createControls();
   this.createForm();
  }

  createControls() {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    });
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit (new Joke(setup, punchline));
  }

}
