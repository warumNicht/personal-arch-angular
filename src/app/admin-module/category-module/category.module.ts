import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

@NgModule({
  declarations: [CreateCategoryComponent, EditCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
