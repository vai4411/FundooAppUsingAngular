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
import { ManageNotesComponent } from './components/manage-notes/manage-notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveButtonComponent } from './components/archive-button/archive-button.component';
import { TrashButtonComponent } from './components/trash-button/trash-button.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponenets,
    SidenavListComponent,
    HeaderComponent,
    LayoutComponent,
    AddNoteComponent,
    DisplayNotesComponent,
    ManageNotesComponent,
    ArchiveComponent,
    TrashComponent,
    ArchiveButtonComponent,
    TrashButtonComponent,
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
