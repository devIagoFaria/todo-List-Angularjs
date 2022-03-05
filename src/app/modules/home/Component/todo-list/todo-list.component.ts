import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [ ]

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItem(event: number) {

    this.taskList.splice(event, 1);

  }

  public deleteAll() {
    const confirmar = window.confirm("Você tem certeza que deseja deletar tudo?")

    if (confirmar) { this.taskList = [] }

  }

  public setItemTaskList(event: any){
    this.taskList.push({task: event, checked: false})
  }

}
