import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SafeUrlPipe
  ]
})
export class SharedModule {}
