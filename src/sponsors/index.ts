import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing } from './routes';
import { CustomCommonModule } from "../common";
import { SponsorsContainer } from "./containers/sponsors.container";
import { SponsorItemComponent } from "./components/sponsor-item/sponsor-item.component";

@NgModule({
  imports: [
    routing,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    CustomCommonModule,
  ],
  declarations: [
    SponsorsContainer,
    SponsorItemComponent
  ],
  exports: [SponsorsContainer]
})

export class SponsorsModule {}

