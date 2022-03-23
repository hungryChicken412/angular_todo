import { Component, OnInit  } from '@angular/core';
import { createSelector, State } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { AppState } from 'src/app/todo.reducer';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})


export class ListViewComponent{
    messages$ : Observable<Array<any>>;
    myjson:any=JSON;

    constructor(private store: Store<AppState>) {
        this.messages$ = this.store.select('todos');
    }

    
    removeAll(){
        this.store.dispatch({type: 'REMOVE'});
    }
}