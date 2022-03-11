import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  score: number = 0
  scoreObservable = new EventEmitter<number>()

  constructor() {
  }

  registerCoinClick(increment: number): void {
    this.score = this.score + increment
    this.scoreObservable.emit(this.score)
  }
}
