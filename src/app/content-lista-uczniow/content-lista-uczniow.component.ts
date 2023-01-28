import { Component } from '@angular/core';
import {StudentService} from "../student-service/student.service";

@Component({
  selector: 'app-content-lista-uczniow',
  templateUrl: './content-lista-uczniow.component.html',
  styleUrls: ['./content-lista-uczniow.component.css']
})
export class ContentListaUczniowComponent {

  constructor(protected studentService: StudentService) {
  }
  usunStudenta(id: number): void{
    console.log("Usuwam studenta o id: " + id)
    this.studentService.usunStudentawSerwisie(id)
  }

}
