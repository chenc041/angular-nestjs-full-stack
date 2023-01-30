import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '~/environments/environment';
import { routes } from '~/app/routes';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN,
    },
  ],
})
export class AppRoutingModule {}
