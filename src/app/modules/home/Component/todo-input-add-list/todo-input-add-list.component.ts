import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-input-add-list',
  templateUrl: './todo-input-add-list.component.html',
  styleUrls: ['./todo-input-add-list.component.css']
})
export class TodoInputAddListComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter()

  public itemTaskList: string = ""

  public submitItemTaskList (){
     this.emitItemTaskList.emit(this.itemTaskList)
     this.itemTaskList = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
