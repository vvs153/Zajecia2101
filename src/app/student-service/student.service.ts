import { Injectable } from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  nextStudentId: number =1;
studentList: StudentModel[] = []
  constructor() {
 // this.studentList.push({
   // id: 1,
   // imie: 'pawel',
   // nazwisko: 'gawel',
    //dataUrodzenia: '2000-01-03'
 // }) //push --> add()
  }
  //nazwa metody -> dodaj studenta
  //nowyStudent -> nazwa parametru
  //:StudentModel -> typ parametry
  // :void -> typ zwracanej funckji
  dodajStudenta(nowyStudent: StudentModel): void{
    nowyStudent.id = this.nextStudentId++
    this.studentList.push(nowyStudent)
  }

  usunStudentawSerwisie(id: number) : void{
  let znalezionyStudent
    for (const student of this.studentList){
      if(student.id==id){
        znalezionyStudent=student
        break;
      }
    }
    if (znalezionyStudent==undefined){
      return
    }
    const index = this.studentList.indexOf(znalezionyStudent,0)
    this.studentList.splice(index,1)
    // usuniecie 1 el na pozycji index
  }
}
