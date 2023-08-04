import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoListComponent,
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
