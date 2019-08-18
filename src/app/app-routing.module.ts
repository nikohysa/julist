import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: './lazy-loaders/authentication-loader.module#AuthenticationLoaderModule' },
  { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
