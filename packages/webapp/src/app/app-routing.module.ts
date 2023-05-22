import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutesBase } from '~/app/routes.base';

@NgModule({
  imports: [RouterModule.forRoot(RoutesBase)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
