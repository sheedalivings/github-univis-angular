import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-exercise-one-solution',
  templateUrl: './exercise-one-solution.component.html',
  styleUrls: ['./exercise-one-solution.component.css']
})
export class ExerciseOneSolutionComponent implements OnInit {

  // Class variables are declared here, above constructor()

  imageDescriptions = [
    'An open window',
    'A novel',
    'A couple holding hands',
    'An avocado',
    'A poem written in the sand',
  ]

  someSongs = [
    { title: 'If I\'m Being Honest', duration: 279, album: 'Human' },
    { title: 'She', duration: 245, album: 'Human' },
    { title: 'Guiltless', duration: 208, album: 'Guiltless' },
    { title: 'Four Tequilas Down', duration: 142, album: 'Build a Problem' },
  ]

  songProperties = ['title', 'duration', 'album']

  constructor() { }

  ngOnInit(): void {
  }

}
