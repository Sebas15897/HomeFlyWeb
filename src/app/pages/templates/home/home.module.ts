import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { MessageComponentComponent } from './message-component/message-component.component';
import { StaysComponent } from './stays/stays.component';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        HeroHomeComponent,
        DestinationsComponent,
        MessageComponentComponent,
        StaysComponent
    ],
    imports: [CommonModule, HomeRoutingModule],
})

export class HomeModule {}
