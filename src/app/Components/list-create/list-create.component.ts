import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/todo.reducer';



@Component({
    selector: 'app-list-create',
    templateUrl: './list-create.component.html',
    styleUrls: ['./list-create.component.css']
})

export class ListCreateComponent{
    todo : Observable<Array<any>>
    
    constructor(private store: Store<AppState>) {
        this.todo = store.select('todos');
    }
    
    newList = {
        listName: 'listName', content:[{title: '', isDone:false}]
    }
    
    newListTitle = '';
    newTaskTitle = '';

    AddNewTask(){
        if (this.newTaskTitle != ''){
            if (this.newList.content[0].title != ''){
                this.newList.content.push({title: this.newTaskTitle, isDone:false});
            } else {
                this.newList.content[0].title = this.newTaskTitle;
            }
            this.newTaskTitle = '';
        }
    }
    CreateNewList(){
        if (this.newListTitle != ''){   
            this.newList.listName = this.newListTitle;
            
            this.store.dispatch({type: 'TODO_ADD', todos: [this.newList]});
            
            this.newList = {
                listName: 'listName', content:[{title: '', isDone:false}]
            }
            
            this.newListTitle = '';
        }
    }


}