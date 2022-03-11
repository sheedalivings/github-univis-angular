import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { CoinService } from '../../services/coin.service'
import { GlowService } from '../../services/glow.service'
import { GlowableComponent } from '../glowable/glowable.component'

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})

export class CoinComponent extends GlowableComponent implements OnInit, OnDestroy {

  @Input() initialType: CoinType = CoinType.Yellow
  @Input() id: any

  type: CoinType
  CoinType = CoinType

  constructor(
    private coinService: CoinService,
    protected glowService: GlowService
  ) {
    super(glowService)
  }

  ngOnInit(): void {
    this.type = this.initialType

    this.registerComponent('coin')
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()
  }

  onClick(): void {
    switch (this.type) {
      case CoinType.Yellow:
        this.coinService.registerCoinClick(4)
        this.type = CoinType.Blue
        break
      case CoinType.Blue:
        this.coinService.registerCoinClick(1)
        this.type = CoinType.None
        break
      case CoinType.LogoYellow:
        this.coinService.registerCoinClick(50)
        this.type = CoinType.LogoBlue
        break
      case CoinType.Silver:
        this.coinService.registerCoinClick(100)
        this.type = CoinType.Yellow
        break
    }
  }

}

enum CoinType {
  None = -1,
  Yellow = 0,
  Blue = 1,
  LogoYellow = 2,
  LogoBlue = 3,
  Silver = 4,
}
