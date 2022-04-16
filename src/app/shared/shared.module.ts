import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [HeaderComponent, TitleComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent, TitleComponent],
  providers: [],
})
export class SharedModule {}
