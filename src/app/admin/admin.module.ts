import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryModule } from './category/category.module';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    CategoryModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
