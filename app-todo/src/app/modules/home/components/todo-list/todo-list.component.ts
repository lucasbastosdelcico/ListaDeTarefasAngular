import { Component, OnInit , DoCheck} from '@angular/core';
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck  {
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public tasksList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  public deleteItemTaskList(event: number) {
    this.tasksList.splice(event, 1)

  }
  public deleteAllTaskList() {
    const confirma = window.confirm('Deseja deletar tudo ?')
    if (confirma) {
      this.tasksList = []
    }
  }

  public setEmitTaskList(event: string) {
    if (event == "") {
      alert("Digite sua task")
    } else {
      this.tasksList.push({ task: event, checked: false })
    }
  }

  public validaInput (event:string , index:number){
      if(!event.length) {
       const confirma =  window.confirm("Task está vazia , deseja deletar ?")
        if(confirma){
          this.deleteItemTaskList(index);
        }
  }
  
}
public setLocalStorage(){
  this.tasksList.sort((first,last) => Number(first.checked) - Number(last.checked));
  localStorage.setItem("list" ,JSON.stringify(this.tasksList))
}
}
