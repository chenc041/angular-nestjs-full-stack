import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '~/app/login/login.component';
import { LoginRoutingModule } from '~/app/login/login-routing.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, MatSliderModule],
})
export class LoginModule {}
