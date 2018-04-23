import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopoComponent } from './topo/topo.component';
import { FormTemplateDrivenComponent } from '../form-template-driven/form-template-driven.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [TopoComponent, 
    FormTemplateDrivenComponent  
  ],
  exports: [
    TopoComponent,
    FormTemplateDrivenComponent
  ]
})
export class PrincipalModule { }
