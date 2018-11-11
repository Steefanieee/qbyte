import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class CustomCommonModule { }
