import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

export const CATEGORY_ROUTES: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CATEGORY_ROUTES)],
  exports: [RouterModule]
})
export class CategoryRouterModule { }
