import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports:[HeaderComponent, FooterComponent],
  // entryComponents:[HeaderComponent, FooterComponent]
})
export class ExtraModule { }
