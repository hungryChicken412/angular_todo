import { Action, createSelector } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { State } from '@ngrx/store';

import { take } from 'rxjs/operators'
export interface AppState {
    todos: Array<any>;
}



const initState : AppState = {
    todos :[
        {listName: 'Demo List Here', content:[{title: 'Learn Angular', isDone:false}]},
    ]
}
export function todoReducer(state: Array<any> = [initState], action: Action) {
    switch (action.type) {
        case 'TODO_ADD':
            state = [...state, action];
            return state
        case 'REMOVE':
            state = [];
            return state
        default:
            return state;
    }
}
