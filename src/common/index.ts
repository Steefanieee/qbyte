import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class CustomCommonModule { }
