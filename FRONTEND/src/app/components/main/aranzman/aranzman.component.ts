import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AranzmanDialogComponent } from '../../dialogs/aranzman/aranzman-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Aranzman } from '../../../models/aranzman';
import { Hotel } from '../../../models/hotel';
import { TuristickaAgencija } from '../../../models/turisticka-agencija';
import { AranzmanService } from '../../../services/aranzman.service';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnInit, OnDestroy, OnChanges {

  dataSource!: MatTableDataSource<Aranzman>;
  displayedColumns = ['id', 'ukupnaCena', 'placeno', 'datumRealizacije', 'hotel', 'actions'];

  subscription!: Subscription;

  @Input() childSelectedTuristickaAgencija!: TuristickaAgencija;

  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;

  constructor(private aranzmanService: AranzmanService,
              public dialog: MatDialog) {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.childSelectedTuristickaAgencija.id) {
      this.loadData();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.aranzmanService.getAranzmanByTuristickaAgencija(this.childSelectedTuristickaAgencija.id).subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    ),
    (error: Error) => {console.log(error.name + ' ' + error.message);}
  }

  public openDialog(flag: number, id?: number, ukupnaCena?: number, placeno?: boolean, datumRealizacije?: Date, hotel?: Hotel): void {
    const dialogRef = this.dialog.open(AranzmanDialogComponent, {data:{id, ukupnaCena, placeno, datumRealizacije, hotel}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.data.turistickaAgencija = this.childSelectedTuristickaAgencija;
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
