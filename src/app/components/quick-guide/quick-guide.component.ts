import { Component, OnDestroy, OnInit } from '@angular/core'
import { GlowService } from '../../services/glow.service'
import { GlowableComponent } from '../glowable/glowable.component'
import { range } from 'lodash'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-quick-guide',
  templateUrl: './quick-guide.component.html',
  styleUrls: ['./quick-guide.component.css']
})
export class QuickGuideComponent extends GlowableComponent implements OnInit, OnDestroy {

  tableData = [
    { colour: 'Yellow', length: 6, type: 'Primary' },
    { colour: 'Red', length: 3, type: 'Primary' },
    { colour: 'Blue', length: 4, type: 'Primary' },
    { colour: 'Green', length: 5, type: 'Secondary' },
    { colour: 'Purple', length: 6, type: 'Secondary' },
    { colour: 'Black', length: 5, type: 'Greyscale' },
    { colour: 'White', length: 5, type: 'Greyscale' },
    { colour: 'Rainbow', length: 7, type: null },
  ]
  tableProperties = ['colour', 'length', 'type']

  table2Data = [
    { a: 1, b: 2 },
    { a: 'C', b: 'J' },
  ]
  table2Properties = ['a', 'b']

  textBold = false

  twoWayBindData = 'Default text the from .ts file'

  showTable = true
  directivesTableData = [
    { quantity: 5, adjective: 'Golden', noun: 'Rings' },
    { quantity: 4, adjective: 'Calling', noun: 'Birds' },
    { quantity: 3, adjective: 'French', noun: 'Pens' },
    { quantity: 2, adjective: 'Daffy', noun: 'Ducks' },
    { quantity: 1, noun: 'Foie Gras in my belly' },
  ]
  directivesTableProperties = ['quantity', 'adjective', 'noun']

  coinCount = 2

  pipeExampleInputs: any[] = ['myString', { name: 'J', value: -9 }, new Date(), new Date()]

  constructor(
    protected glowService: GlowService,
    private route: ActivatedRoute,
  ) {
    super(glowService)
  }

  ngOnInit(): void {
    this.registerComponent('details')
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.querySelector('#' + fragment).scrollIntoView()
      }
    })
  }

  ngOnDestroy(): void {
    super.ngOnDestroy()
  }

  toggleGlow(id: string, state: boolean): void {
    this.glowService.toggleGlow(id, state)
  }

  toggleBold() {
    this.textBold = !this.textBold
  }

  range(n: number) {
    return range(n)
  }

}
