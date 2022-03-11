import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentsTableColumns = ['concept', 'details']
  contentsTableData = [
    { concept: 'Components', details: 'Examples of components, and how they can interact with each other.' },
    { concept: 'Binding', details: 'Angular\'s automatic interaction between HTML templates and TypeScript code for components.' },
    { concept: 'Directives', details: 'Angular\'s feature to dynamically manipulate HTML templates.' },
    { concept: 'Services', details: 'Usage of services across components and routes.' },
    { concept: 'Pipes', details: 'Transformation of objects in HTML interpolation.' },
    { concept: 'Modules', details: 'Basic use of Angular modules to organise code, including Router module.' },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
