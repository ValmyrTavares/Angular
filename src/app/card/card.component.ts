import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { TodoList } from '../models/todolistModel'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public newTodoList: TodoList = new TodoList();
  public title: string = '';

  constructor(public rest: RestService) { }

  ngOnInit() {
  }

  criarTodo() {
    console.log(this.title)
    //this.rest.request("POST", "todolist", this.newTodoList)
  }

  lerTodos() { }

  onSubmit() {
    console.log(this.title)
    return this.rest.request("POST", "todolist", {
      title: this.title
    })
      .then(() => console.log('criado'))
      .catch((err) => console.log(err))
  }
}
