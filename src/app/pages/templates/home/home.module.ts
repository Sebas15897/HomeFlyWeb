import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [CommonModule, HomeRoutingModule],
})

export class HomeModule {}
