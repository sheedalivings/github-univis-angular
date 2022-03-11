import { Component, OnDestroy } from '@angular/core'
import { GlowService } from '../../services/glow.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-glowable',
  templateUrl: './glowable.component.html',
  styleUrls: ['./glowable.component.css']
})
export abstract class GlowableComponent implements OnDestroy {

  glowSub: Subscription
  enableGlow: boolean = false

  constructor(
    protected glowService: GlowService
  ) {
  }

  registerComponent(type: string): void {
    this.glowSub = this.glowService.registerComponent(type).subscribe(s => {
      this.enableGlow = s
    })
  }

  ngOnDestroy(): void {
    this.glowSub.unsubscribe()
  }

}
