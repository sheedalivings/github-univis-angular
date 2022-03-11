import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.css']
})
export class ExternalResourcesComponent implements OnInit {

  resourcesColumns = ['name', 'description']

  resourcesData = [
    {
      name: { url: 'https://angular.io/docs', text: 'Angular Docs' },
      description: 'Official Angular documentation home page. Very comprehensive.'
    },
    {
      name: { url: 'https://angular.io/start', text: 'Angular Docs: e-commerce example' },
      description: 'Step-by-step tutorial for a simple app.'
    },
    {
      name: { url: 'https://angular.io/tutorial', text: 'Angular Docs: Tour of Heroes' },
      description: 'Very comprehensive tutorial for a more complex app.'
    },
    {
      name: { url: 'https://angular.io/guide/rx-library', text: 'Angular Docs: RxJS summary' },
      description: 'Examples of Observables and other RxJS functionality in Angular.'
    },
    {
      name: { url: 'https://angular.io/guide/example-apps-list', text: 'Angular Docs: Example applications' },
      description: 'A list of example applications, each demonstrating different concepts.'
    },
  ]

  resourcesDataOther = [
    {
      name: { url: 'https://ng-bootstrap.github.io/#/components', text: 'NgBootstrap' },
      description: 'Wrapper and extension for Bootstrap, a common library/framework for styling HTML pages and elements.'
    },
    {
      name: { url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', text: 'Flexbox Cheat Sheet' },
      description: 'Visual guide to Flexbox classes included with Bootstrap, used for layout of HTML elements.'
    },
    {
      name: { url: 'https://rxjs-dev.firebaseapp.com/guide/overview', text: 'RxJS Docs' },
      description: 'RxJS (Reactive Javascript) documentation. RxJS is used for asynchronous actions.'
    },
    {
      name: { url: 'https://rxjs-dev.firebaseapp.com/api?type=function', text: 'RxJS Docs: Reference' },
      description: 'List of RxJS objects. Pages for Observables such as combineLatest, forkJoin, first, concat, merge have visual representations.'
    },
    {
      name: { url: 'https://lodash.com/', text: 'Lodash' },
      description: 'A comprehensive library with many general utilities for JavaScript.'
    },
    {
      name: { url: 'https://blog.asayer.io/how-to-debug-angular-apps-with-chrome-devtools', text: 'Debugging with Chrome DevTools' },
      description: 'A solid summary of (very) useful features in Google Chrome\'s built-in debugger. Familiarity with the these features is a necessity in developing complex applications.'
    },
    {
      name: { url: 'https://christiankohler.net/angular-dependency-injection-infographic', text: 'Dependency Injection Infographic' },
      description: 'Visual guide and technical explanation of how dependency injection (services and more general injectables) work and are used.'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
