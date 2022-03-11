import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuickGuideComponent } from './quick-guide.component'

describe('DetailsComponent', () => {
  let component: QuickGuideComponent
  let fixture: ComponentFixture<QuickGuideComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickGuideComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGuideComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
