import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../models/todolistModel'

@Component({
  selector: 'app-fomato',
  templateUrl: './fomato.component.html',
  styleUrls: ['./fomato.component.css']
})
export class FomatoComponent implements OnInit {
  private edit: boolean = false;
  private Vin: boolean = false;
  @Input() todo: TodoList;

  constructor() {

  }

  ngOnInit() {
  }

  handleClick() {
    console.log('click')
    this.edit = true;
  }
  handleAttTodo() {
    this.edit = false;
  }
  DeLaViande() {
    this.Vin = true;
    console.log('click')
  }
  LaViande() {
    this.Vin = false;
    console.log('desclick')
  }
}
