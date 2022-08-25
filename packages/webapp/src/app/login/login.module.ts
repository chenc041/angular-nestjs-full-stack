import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '~/app/login/login.component';
import { LoginRoutingModule } from '~/app/login/login-routing.module';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, CheckboxModule],
})
export class LoginModule {}
