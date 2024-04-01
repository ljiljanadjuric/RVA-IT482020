import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destinacija } from '../../../models/destinacija';
import { Hotel } from '../../../models/hotel';
import { DestinacijaService } from '../../../services/destinacija.service';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.css']
})
export class HotelDialogComponent implements OnInit {

  flag!: number;
  destinacije!: Destinacija[];

  constructor(public snackBar: MatSnackBar,
              public hotelService: HotelService,
              @Inject(MAT_DIALOG_DATA) public data: Hotel,
              public dialogRef: MatDialogRef<Hotel>,
              public destinacijaService: DestinacijaService) {

  }

  ngOnInit(): void {
    this.destinacijaService.getAllDestinacija().subscribe(
      data => {
        this.destinacije = data;
      }
    )
  }

  public compare(a: any, b: any) {
    return a.id == b.id
  }

  public add(): void {
    this.hotelService.addHotel(this.data).subscribe(
      () => {
        this.snackBar.open('Hotel: ' + this.data.naziv + ' je uspesno dodat!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public update(): void {
    this.hotelService.updateHotel(this.data).subscribe(
      () => {
        this.snackBar.open('Hotel sa ID: ' + this.data.id + ' je uspesno izmenjen!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public delete(): void {
    this.hotelService.deleteHotel(this.data.id).subscribe(
      () => {
        this.snackBar.open('Hotel sa ID: ' + this.data.id + ' je uspesno izbrisan!', 'Ok', {duration: 4500})
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
