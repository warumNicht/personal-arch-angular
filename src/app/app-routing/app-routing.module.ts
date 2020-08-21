import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from '../home/home.component';
import { ADMIN_ROUTES } from '../admin/admin-routing/admin-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', children: ADMIN_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
