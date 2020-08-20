import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryModule } from '../category/category.module';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'category', component: UserComponent },
  { path: 'admin/category', component: CategoryModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
