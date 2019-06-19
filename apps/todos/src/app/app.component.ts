import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'nx-tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}];

  addTodo() {
    this.todos.push( {
      title: `New todod ${Math.floor(Math.random() * 1000)}`
    });
  }
}
