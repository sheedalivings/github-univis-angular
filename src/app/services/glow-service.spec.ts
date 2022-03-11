import { TestBed } from '@angular/core/testing'

import { GlowService } from './glow.service'

describe('GlowServiceService', () => {
  let service: GlowService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(GlowService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
