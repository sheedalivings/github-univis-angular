import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CoinComponent } from './coin/coin.component'
import { HomeComponent } from './home/home.component'
import { QuickGuideComponent } from './quick-guide/quick-guide.component'
import { DataTableComponent } from './data-table/data-table.component'
import { ExternalResourcesComponent } from './external-resources/external-resources.component'
import { PipesModule } from '../pipes/pipes.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ExercisesComponent } from './exercises/exercises.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ExerciseOneComponent } from './exercises/exercise-one/exercise-one.component'
import { ExerciseTwoComponent } from './exercises/exercise-two/exercise-two.component'
import { ExerciseTwoSolutionComponent } from './exercises/exercise-two-solution/exercise-two-solution.component'
import { ExerciseOneSolutionComponent } from './exercises/exercise-one-solution/exercise-one-solution.component'


@NgModule({
  declarations: [
    CoinComponent,
    HomeComponent,
    QuickGuideComponent,
    DataTableComponent,
    ExternalResourcesComponent,
    ExercisesComponent,
    ExerciseOneComponent,
    ExerciseOneSolutionComponent,
    ExerciseTwoComponent,
    ExerciseTwoSolutionComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    CoinComponent,
    HomeComponent
  ]
})
export class ComponentsModule {
}
