import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    TablaComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    TablaComponent,
    DetallesComponent
  ]
})
export class PrincipalModule { }
