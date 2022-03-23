import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCreateComponent } from './Components/list-create/list-create.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListViewComponent } from './Components/list-view/list-view.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';


import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';




@NgModule({
  declarations: [
    AppComponent,
    ListCreateComponent,
    HeaderComponent,
    ListViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatListModule,
    MatGridListModule,
    StoreModule.forRoot({ todos: todoReducer }),


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
