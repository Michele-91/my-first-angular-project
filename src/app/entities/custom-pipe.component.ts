import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'conditionPipe'
})

export class ConditionPipe implements PipeTransform {
    transform(len: number, num: number): (number | string) {
        return (len < num) ? 'Total too low' : len;
    }

}
