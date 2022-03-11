import { EventEmitter, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class GlowService {

  observablesMap: { [t: string]: EventEmitter<boolean> } = {}

  constructor() {
  }

  registerComponent(type: string): EventEmitter<boolean> {

    if (!(type in this.observablesMap)) {
      this.observablesMap[type] = new EventEmitter<boolean>()
    }
    return this.observablesMap[type]
  }

  toggleGlow(id: string, state: boolean): void {
    this.observablesMap[id].emit(state)
  }
}
