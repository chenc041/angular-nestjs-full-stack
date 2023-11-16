import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { appRootRoutes } from '~/app/app.root.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { IconDefinition } from '@ant-design/icons-angular';

import { SettingOutline, MailOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [SettingOutline, MailOutline];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRootRoutes, withComponentInputBinding(), withViewTransitions()),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(NzIconModule.forRoot(icons)),
  ],
};
