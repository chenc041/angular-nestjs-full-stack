import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '~/app/common/login/login.component';
import { LoginRoutingModule } from '~/app/common/login/login-routing.module';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, CheckboxModule],
})
export class LoginModule {}
