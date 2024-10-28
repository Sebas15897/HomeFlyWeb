import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports:[LayoutComponent]
})

export class LayoutModule {}
