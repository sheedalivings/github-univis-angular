import { Component, OnInit } from '@angular/core'

// Values are the number of metres/unit
const lengthUnits = {
  um: 1e-6,
  mm: 1e-3,
  cm: 1e-2,
  m: 1,
  km: 1e3,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
}

@Component({
  selector: 'app-exercise-two-solution',
  templateUrl: './exercise-two-solution.component.html',
  styleUrls: ['./exercise-two-solution.component.css']
})
export class ExerciseTwoSolutionComponent implements OnInit {

  valueOneNumber: number = 1
  valueTwoNumber: number = 1000

  valueOneUnit: string = 'm'
  valueTwoUnit: string = 'mm'

  lengthUnitsKeys: string[] = Object.keys(lengthUnits)

  constructor() {
  }

  ngOnInit(): void {
  }

  onValueOneChange() {
    this.valueTwoNumber = this.valueOneNumber / lengthUnits[this.valueTwoUnit] * lengthUnits[this.valueOneUnit]
  }

  onValueTwoChange() {
    this.valueOneNumber = this.valueTwoNumber / lengthUnits[this.valueOneUnit] * lengthUnits[this.valueTwoUnit]
  }

}
