import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
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
        this.newList.listName = this.newListTitle;
        this.newListTitle = '';
    }


}