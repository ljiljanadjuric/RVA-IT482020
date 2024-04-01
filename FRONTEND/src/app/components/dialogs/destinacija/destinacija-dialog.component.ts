import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destinacija } from '../../../models/destinacija';
import { DestinacijaService } from '../../../services/destinacija.service';

@Component({
  selector: 'app-destinacija-dialog',
  templateUrl: './destinacija-dialog.component.html',
  styleUrls: ['./destinacija-dialog.component.css']
})
export class DestinacijaDialogComponent {

  flag!: number;

  constructor(public snackBar: MatSnackBar,
              public destinacijaService: DestinacijaService,
              @Inject(MAT_DIALOG_DATA) public data: Destinacija,
              public dialogRef: MatDialogRef<Destinacija>) {

  }

  public add(): void {
    this.destinacijaService.addDestinacija(this.data).subscribe(
      () => {
        this.snackBar.open('Destinacija: ' + this.data.mesto + ' je uspesno dodata!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public update(): void {
    this.destinacijaService.updateDestinacija(this.data).subscribe(
      () => {
        this.snackBar.open('Destinacija sa ID: ' + this.data.id + ' je uspesno izmenjena!', 'Ok', {duration: 4500})
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok', {duration: 2500})
    }
  }

  public delete(): void {
    this.destinacijaService.deleteDestinacija(this.data.id).subscribe(
      () => {
        this.snackBar.open('Destinacija sa ID: ' + this.data.id + ' je uspesno izbrisana!', 'Ok', {duration: 4500})
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
