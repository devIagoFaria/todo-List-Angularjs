import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './Component/todo-list/todo-list.component';
import { HeaderComponent } from './Component/header/header.component';
import { TodoButtonDeleteAllComponent } from './Component/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddListComponent } from './Component/todo-input-add-list/todo-input-add-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    TodoListComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class HomeModule { }
