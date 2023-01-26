import { Component } from '@angular/core';
export type StudentModel={
  lp: number,
  imie: string,
  nazwisko: string,
  dataUrodzenia: string
}
@Component({
  selector: 'app-content-lista-uczniow',
  templateUrl: './content-lista-uczniow.component.html',
  styleUrls: ['./content-lista-uczniow.component.css']
})
export class ContentListaUczniowComponent {
  studentList: StudentModel[] = [];
  constructor() {
    this.studentList=[
      {
        lp: 1,
        imie: 'bob',
        nazwisko: 'bober',
        dataUrodzenia: '2000-01-02'
      },
      {
        lp: 2,
        imie: 'bobex',
        nazwisko: 'kek',
        dataUrodzenia: '1998-01-02'
      },
      {
        lp: 3,
        imie: 'Tafex',
        nazwisko: 'Trafk',
        dataUrodzenia: '1996-04-03'
      }
    ]
  }
}
