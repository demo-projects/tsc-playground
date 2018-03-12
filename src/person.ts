// person.ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-person',
  template: `<div>{{ name }}</div>`
})
export class Person {
  public name: string;

  constructor() {
    this.name = 'James';
  }

  wakeup() {
    setTimeout(() => {
      console.log(`Wake up ${this.name}`);
    }, 1000)
  }
}
