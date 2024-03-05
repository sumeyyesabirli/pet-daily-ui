import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'main-page',
    loadChildren: () =>
      import('./main-page/main-page.module').then((m) => m.MainPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'app-share',
    loadChildren: () =>
      import('./share/share.module').then((m) => m.ShareModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
