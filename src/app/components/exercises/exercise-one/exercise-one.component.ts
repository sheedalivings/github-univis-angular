import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {

  // Class variables are declared here, above constructor()

  imageDescriptions = [
    'An open window',
    'A novel',
    'A couple holding hands',
    'An avocado',
    'A poem written in the sand',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
