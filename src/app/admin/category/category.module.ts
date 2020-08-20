import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CategoryRouterModule } from './category-router/category-router.module';

@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [
    CommonModule,
    CategoryRouterModule
  ]
})
export class CategoryModule { }
