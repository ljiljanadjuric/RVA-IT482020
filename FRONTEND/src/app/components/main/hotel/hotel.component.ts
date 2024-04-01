import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { HotelDialogComponent } from '../../dialogs/hotel/hotel-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Destinacija } from '../../../models/destinacija';
import { Hotel } from '../../../models/hotel';
import { HotelService } from '../../../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit, OnDestroy {

  dataSource!: MatTableDataSource<Hotel>;
  displayedColumns = ['id', 'naziv', 'brojZvezdica', 'opis', 'destinacija', 'actions'];

  subscription!: Subscription;

  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;

  constructor(private hotelService: HotelService,
              public dialog: MatDialog) {
    }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.hotelService.getAllHotels().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
    (error: Error) => {console.log(error.name + ' ' + error.message);}
  }

  public openDialog(flag: number, id?: number, naziv?: string, brojZvezdica?: number, opis?: string, destinacija?: Destinacija): void {
    const dialogRef = this.dialog.open(HotelDialogComponent, {data:{id, naziv, brojZvezdica, opis, destinacija}});
    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(
      results => {
        if(results == 1) {
          this.loadData();
        }
      }
    )
  }

  public applyFilter(filter:any):void {
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

}
