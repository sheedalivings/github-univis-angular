import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { GlowableComponent } from '../glowable/glowable.component'
import { GlowService } from '../../services/glow.service'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
/**
 * Displays data as a table using Bootstrap features.
 *
 * data: list of objects to show data for. The shown properties are specified by the 'properties'
 *       input. If a object doesn't have a property, the corresponding cell is blank.
 *    e.g. [{name: 'Kenny', age: 20, email: '...'},
 *          {name: 'Mary,            email: 'myEmail.com'}]
 * properties: list of properties in the data to show as columns, from left to right.
 *    e.g. ['name', 'age', 'email']
 * rowIndexing: Set to true to display an index column on the left. False by default.
 */
export class DataTableComponent extends GlowableComponent implements OnInit, OnDestroy {
  @Input() data: any[]
  @Input() properties: string[]
  @Input() rowIndexing = false

  constructor(
    protected glowService: GlowService
  ) {
    super(glowService)
  }

  ngOnInit(): void {
    this.registerComponent('table')
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()
  }

  isLink(obj: any): boolean {
    return obj && obj.url
  }

}
