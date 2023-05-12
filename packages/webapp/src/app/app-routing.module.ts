import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '~/environments/environment';
import { routes } from '~/app/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: !environment.production })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
