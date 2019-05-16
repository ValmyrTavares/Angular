import { Component } from '@angular/core';
import { RestService } from './services/rest.service';
import { TodoList } from './models/todolistModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoList: TodoList[] = [];
  public newTodoList: TodoList = new TodoList();

  constructor(public rest: RestService) {

  }

  ngOnInit() {
    this.rest.request<TodoList[]>("GET", "todolist").then(result => {
      this.todoList = result;
      console.log(result)
    })
  }
}
