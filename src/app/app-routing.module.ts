import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './components/home/home.component'
import { QuickGuideComponent } from './components/quick-guide/quick-guide.component'
import { ExternalResourcesComponent } from './components/external-resources/external-resources.component'
import { ExercisesComponent } from './components/exercises/exercises.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quick-guide', component: QuickGuideComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'resources', component: ExternalResourcesComponent },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
