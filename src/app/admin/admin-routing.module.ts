import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }, {
    path: 'animal-type',
    loadChildren: () => import('./animal-type/animal-type.module').then((m) => m.AnimalTypeModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
