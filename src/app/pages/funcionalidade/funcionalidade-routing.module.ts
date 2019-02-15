import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionaliadeListComponent } from './funcionaliade-list/funcionaliade-list.component';



const routes: Routes = [{
  path: '',
  component: FuncionaliadeListComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormularioRoutingModule {

}

export const routedComponents = [
  FuncionaliadeListComponent,
];
