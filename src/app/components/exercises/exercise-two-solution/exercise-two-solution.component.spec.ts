import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ExerciseTwoComponent } from './exercise-two-solution.component'

describe('ExerciseTwoComponent', () => {
  let component: ExerciseTwoComponent
  let fixture: ComponentFixture<ExerciseTwoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseTwoComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTwoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
