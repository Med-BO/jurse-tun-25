import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: "jurse", component: MainLayoutComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "dates", component: DatesComponent },
      { path: "participation", component: ParticipationComponent },
      { path: "presentation", component: PresentationComponent },
      { path: "commitees", component: CommiteesComponent },
      { path: "sponsors", component: SponsorsComponent },
      { path: "venue", component: VenueComponent },
      { path: "media", component: MediaComponent },
      { path: "contact", component: ContactComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
