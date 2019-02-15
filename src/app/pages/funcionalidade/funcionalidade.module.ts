import { NgModule } from '@angular/core';
import { ThemeModule } from './../../@theme/theme.module';
import { ButtonsModule } from './../bootstrap/buttons/buttons.module';
import { FuncionaliadeListComponent } from './funcionaliade-list/funcionaliade-list.component';
import { FormularioRoutingModule } from './funcionalidade-routing.module';

@NgModule({
  declarations: [FuncionaliadeListComponent],
  imports: [
    ThemeModule,
    FormularioRoutingModule,
    ButtonsModule
  ]
})
export class FuncionalidadeModule { }
