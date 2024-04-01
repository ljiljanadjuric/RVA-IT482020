import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuristickaAgencijaComponent } from './components/main/turisticka-agencija/turisticka-agencija.component';
import { DestinacijaComponent } from './components/main/destinacija/destinacija.component';
import { HotelComponent } from './components/main/hotel/hotel.component';
import { AranzmanComponent } from './components/main/aranzman/aranzman.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';


const routes: Routes = [
  {path:'turistickaAgencija', component:TuristickaAgencijaComponent},
  {path:'destinacija', component:DestinacijaComponent},
  {path:'hotel', component:HotelComponent},
  {path:'aranzman', component:AranzmanComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'author', component:AuthorComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

