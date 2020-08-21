import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
