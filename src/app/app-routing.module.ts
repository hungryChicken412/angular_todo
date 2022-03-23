import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: 'todos', component: PostListComponent },
  { path: 'createNew', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
