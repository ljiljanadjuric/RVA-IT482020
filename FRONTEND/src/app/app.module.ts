import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { TuristickaAgencijaComponent } from './components/main/turisticka-agencija/turisticka-agencija.component';
import { DestinacijaComponent } from './components/main/destinacija/destinacija.component';
import { HotelComponent } from './components/main/hotel/hotel.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TuristickaAgencijaDialogComponent } from './components/dialogs/turisticka-agencija/turisticka-agencija-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DestinacijaDialogComponent } from './components/dialogs/destinacija/destinacija-dialog.component';
import { HotelDialogComponent } from './components/dialogs/hotel/hotel-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AranzmanDialogComponent } from './components/dialogs/aranzman/aranzman-dialog.component';
import { AranzmanComponent } from './components/main/aranzman/aranzman.component';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'

@NgModule({
  declarations: [
    AppComponent,
    TuristickaAgencijaComponent,
    DestinacijaComponent,
    HotelComponent,
    AuthorComponent,
    AboutComponent,
    HomeComponent,
    TuristickaAgencijaDialogComponent,
    DestinacijaDialogComponent,
    HotelDialogComponent,
    AranzmanDialogComponent,
    AranzmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

