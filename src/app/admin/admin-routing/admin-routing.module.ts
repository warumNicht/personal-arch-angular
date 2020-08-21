import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORY_ROUTES } from '../category/category-router/category-router.module';

export const ADMIN_ROUTES: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'category', component: UserComponent },
  { path: 'category', children: CATEGORY_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
