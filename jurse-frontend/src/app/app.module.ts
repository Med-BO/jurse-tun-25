import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DatesComponent } from './pages/dates/dates.component';
import { ParticipationComponent } from './pages/participation/participation.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { CommiteesComponent } from './pages/commitees/commitees.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { VenueComponent } from './pages/venue/venue.component';
import { MediaComponent } from './pages/media/media.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxTweetModule } from 'ngx-tweet';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    DatesComponent,
    ParticipationComponent,
    PresentationComponent,
    CommiteesComponent,
    SponsorsComponent,
    VenueComponent,
    MediaComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxTweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
