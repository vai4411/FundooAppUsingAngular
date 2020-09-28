import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { MatMenuModule} from '@angular/material/menu';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ManageNotesComponent } from './components/manage-notes/manage-notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TranshComponent } from './components/transh/transh.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    SidenavListComponent,
    HeaderComponent,
    LayoutComponent,
    AddNoteComponent,
    DisplayNotesComponent,
    NotesContainerComponent,
    ManageNotesComponent,
    ArchiveComponent,
    TranshComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
