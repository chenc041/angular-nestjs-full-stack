import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '~/app/login/login.component';
import { LoginRoutingModule } from '~/app/login/login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
