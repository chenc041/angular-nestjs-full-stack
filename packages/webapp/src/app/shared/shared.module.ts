import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTextPipe } from '~/app/shared/pipes/short-text.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

@NgModule({
  declarations: [ShortTextPipe, SafeDomPipe],
  imports: [CommonModule],
})
export class SharedModule {}
