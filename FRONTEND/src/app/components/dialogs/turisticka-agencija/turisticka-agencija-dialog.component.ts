import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencija } from '../../../models/turisticka-agencija';
import { TuristickaAgencijaService } from '../../../services/turisticka-agencija';

@Component({
  selector: 'app-turisticka-agencija-dialog',
  templateUrl: './turisticka-agencija-dialog.component.html',
  styleUrls: ['./turisticka-agencija-dialog.component.css']
})
export class TuristickaAgencijaDialogComponent {

  flag!: number;

  constructor(public snackBar: MatSnackBar,
              public turistickaAgencijaService: TuristickaAgencijaService,
              @Inject(MAT_DIALOG_DATA) public data: TuristickaAgencija,
              public dialogRef: MatDialogRef<TuristickaAgencija>) {

  }

  public add():void{
    this.turistickaAgencijaService.addTuristickaAgencija(this.data).subscribe(
      () => {
        this.snackBar.open('Agencija sa nazivom: ' + this.data.naziv + ' je uspesno dodata!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration:2500})
    }
  }

  public update():void{
    this.turistickaAgencijaService.updateTuristickaAgencija(this.data).subscribe(
      () => {
        this.snackBar.open('Agencija sa ID: ' + this.data.id + ' je uspesno izmenjena!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration:2500})
    }
  }

  public delete():void{
    this.turistickaAgencijaService.deleteTuristickaAgencija(this.data.id).subscribe(
      () => {
        this.snackBar.open('Agencija je uspesno izbrisana!', 'Ok', {duration:4500})
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration:2500})
    }
  }

  public cancel():void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmene', 'Ok', {duration:3000})
  }
}