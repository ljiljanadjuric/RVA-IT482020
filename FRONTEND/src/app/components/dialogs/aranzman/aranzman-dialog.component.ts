import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencija } from '../../../models/turisticka-agencija';
import { Aranzman } from '../../../models/aranzman';
import { Hotel } from '../../../models/hotel';
import { AranzmanService } from '../../../services/aranzman.service';
import { HotelService } from '../../../services/hotel.service';
import { TuristickaAgencijaService } from '../../../services/turisticka-agencija';

@Component({
  selector: 'app-aranzman-dialog',
  templateUrl: './aranzman-dialog.component.html',
  styleUrls: ['./aranzman-dialog.component.css']
})
export class AranzmanDialogComponent implements OnInit {

  flag!: number;
  hoteli!: Hotel[];
  agencije!: TuristickaAgencija[];

  constructor(public snackBar: MatSnackBar,
              public aranzmanService: AranzmanService,
              @Inject(MAT_DIALOG_DATA) public data: Aranzman,
              public dialogRef: MatDialogRef<Aranzman>,
              public hotelService: HotelService,
              public turistickaAgencijaService: TuristickaAgencijaService) {

  }

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe(
      data => {
        this.hoteli = data;
      }
    )

    this.turistickaAgencijaService.getAllTuristickaAgencija().subscribe(
      data => {
        this.agencije = data;
      }
    )
  }

  public compare(a: any, b: any) {
    return a.id == b.id
  }

  public add(): void {
    this.aranzmanService.addAranzman(this.data).subscribe(
      () => {
        this.snackBar.open('Aranzman sa ID: ' + this.data.id + ' je uspesno dodat!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public update(): void {
    this.aranzmanService.updateAranzman(this.data).subscribe(
      () => {
        this.snackBar.open('Aranzman sa ID: ' + this.data.id + ' je uspesno izmenjen!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public delete(): void {
    this.aranzmanService.deleteAranzman(this.data.id).subscribe(
      () => {
        this.snackBar.open('Aranzman sa ID: ' + this.data.id + ' je uspesno izbrisan!', 'Ok', {duration: 2500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmene', 'Ok', {duration: 3000})
  }
}