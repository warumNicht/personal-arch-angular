import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATEGORY_ROUTES } from '../category/category-router/category-router.module';
import { CategoryModule } from '../category/category.module';

export const ADMIN_ROUTES: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'category', component: UserComponent },
  { path: 'category', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
