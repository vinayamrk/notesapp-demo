import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent} ,
   { path: 'new', component: NoteDetailsComponent}, 
  { path: ':id', component: NoteDetailsComponent}   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
