import { Component } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
    listOfTodos = [
        {listName: 'Tetii', content:[{title: 'learnAngular', isDone:false}]},
        {listName: 'ivbs', content:[{title: 'learnAngular', isDone:false},{title: 'leasdsdrnAngular', isDone:false}]},
        {listName: 'ivbssdsd', content:[{title: 'learnAngular', isDone:false},{title: 'leasdsdrnAngular', isDone:false}]},
    ]
    deleteListItem(index: number){
        this.listOfTodos.splice(index, 1);
    }
}