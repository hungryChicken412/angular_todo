import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCreateComponent } from './Components/list-create/list-create.component';
import { ListViewComponent } from './Components/list-view/list-view.component';

const routes: Routes = [
  { path: 'todos', component: ListViewComponent },
  { path: 'createNew', component: ListCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
