import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../app/components/login/login.component'
import { DashBoardComponent } from './../app/components/dash-board/dash-board.component'
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ManageNotesComponent } from './components/manage-notes/manage-notes.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'dashBoard', component:DashBoardComponent,children:[{ path: 'manageNotes', component: ManageNotesComponent}]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [LoginComponent, DashBoardComponent,AddNoteComponent]
