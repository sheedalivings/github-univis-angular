import { Pipe, PipeTransform } from '@angular/core'
import { startCase } from 'lodash'

@Pipe({
  name: 'startCase'
})
export class StartCasePipe implements PipeTransform {

  transform(value: string): unknown {
    return startCase(value)
  }

}
