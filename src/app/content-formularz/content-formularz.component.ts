import { Component } from '@angular/core';
import {DEFAULT_STUDENT_MODEL, StudentModel} from "../model/StudentModel";
import {StudentService} from "../student-service/student.service";

@Component({
  selector: 'app-content-formularz',
  templateUrl: './content-formularz.component.html',
  styleUrls: ['./content-formularz.component.css']
})
export class ContentFormularzComponent {
  dodawanyStudent: StudentModel
  constructor(protected studentService:StudentService) {
    //kopiowanie obiejktu //klamra cel, po przeciunku zrodlo
    this.dodawanyStudent= Object.assign({},DEFAULT_STUDENT_MODEL)
  }
  dodajStudentaDoSerwisu(): void{
    this.studentService.dodajStudenta(this.dodawanyStudent);
    this.dodawanyStudent= Object.assign({},DEFAULT_STUDENT_MODEL)
  }
  wyczyscFormularz(): void{
    this.dodawanyStudent= Object.assign({},DEFAULT_STUDENT_MODEL)
  }
}
