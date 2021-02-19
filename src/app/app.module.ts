import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
//import { CKEditorModule } from 'ng2-ckeditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteDetailsComponent,
    NoteCardsComponent,
    //CKEditorModule,

  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule  ,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
