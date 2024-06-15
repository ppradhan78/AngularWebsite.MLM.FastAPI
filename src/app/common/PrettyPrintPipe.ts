import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'prettyprint',
  standalone:true
})
export class PrettyPrintPipe implements PipeTransform {
  transform(val:any):any {
    return JSON.stringify(val, null, 2)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  }
}
