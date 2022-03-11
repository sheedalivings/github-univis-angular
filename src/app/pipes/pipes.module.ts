import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StartCasePipe } from './start-case.pipe'


@NgModule({
  declarations: [
    StartCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StartCasePipe
  ],
})
export class PipesModule {
}
