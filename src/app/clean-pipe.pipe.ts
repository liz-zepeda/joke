import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanPipe'
})
export class CleanPipe implements PipeTransform {

  transform(value: any, badWords?: any): any {
    const badWordsList = badWords.split(',').map((item) => item.trim());
    console.log("badWordsList- ",badWordsList);
    for (let badWord of badWordsList) {
      value = value.replace(badWord, "$%#@!")
    }
    return value;
  }

}
