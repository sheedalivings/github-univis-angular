import { Component, OnDestroy, OnInit } from '@angular/core'
import { CoinService } from '../services/coin.service'
import { GlowService } from '../services/glow.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, OnDestroy {

  score: number = 0
  coinSub: Subscription
  glowSub: Subscription

  enableGlow: boolean = false

  constructor(
    private coinService: CoinService,
    private glowService: GlowService,
  ) {
  }

  ngOnInit(): void {
    this.coinSub = this.coinService.scoreObservable.subscribe(s => {
      this.score = s
    })

    this.glowSub = this.glowService.registerComponent('container').subscribe(s => {
      this.enableGlow = s
    })
  }

  ngOnDestroy(): void {
    this.coinSub.unsubscribe()
    this.glowSub.unsubscribe()
  }


}
