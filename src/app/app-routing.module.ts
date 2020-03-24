import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPcComponent } from './components/add-pc/add-pc.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditPcComponent } from './components/edit-pc/edit-pc.component';
import { PcDetailsComponent } from './components/pc-details/pc-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add', component: AddPcComponent},
  {path: 'edit/:id', component: EditPcComponent},
  {path: 'pc/:id', component: PcDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
