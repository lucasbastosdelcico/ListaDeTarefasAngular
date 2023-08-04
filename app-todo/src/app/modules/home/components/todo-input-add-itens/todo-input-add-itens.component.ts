import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor() { }
  @Output() public emmitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    this.emmitItemTaskList.emit(this.addItemTaskList)
    this.addItemTaskList = "";
  }
 
}
