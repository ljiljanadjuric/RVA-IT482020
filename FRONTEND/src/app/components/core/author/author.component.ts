import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorInfo: any = {
    ime: 'Ljiljana',
    prezime: 'Đurić',
    fakultet: 'Fakultet tehničkih nauka, Novi Sad',
    brojIndeksa: 'IT48/2020'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
//ngOnInit(): void { ... }: Metoda koja se poziva prilikom inicijalizacije komponente. U ovom slučaju,
// metoda je prazna jer nema posebnih inicijalizacija koje treba obaviti prilikom inicijalizacije komponente