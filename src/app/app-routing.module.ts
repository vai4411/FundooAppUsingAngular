import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../app/components/login/login.component'
import { DashBoardComponent } from './../app/components/dash-board/dash-board.component'

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'dashBoard', component:DashBoardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [LoginComponent, DashBoardComponent]
