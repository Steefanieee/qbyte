import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing } from './routes';
import { NewsContainer } from "./containers/news.container";
import { NewsItemComponent } from "./components/news-item/news-item.component";
import { CustomCommonModule } from "../common";
import { MatCardModule } from "@angular/material";

@NgModule({
  imports: [
    routing,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    CustomCommonModule,
    MatCardModule
  ],
  declarations: [
    NewsContainer,
    NewsItemComponent
  ],
  exports: [NewsContainer]
})

export class NewsModule {}

