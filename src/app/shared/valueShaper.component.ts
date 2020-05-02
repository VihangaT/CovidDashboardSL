import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'valueShaper'
})

export class ValueShaper implements PipeTransform {
    transform(value: string[]): string {
        const a = 2;
        const b = value[a].toString();
        return b ;
    }

}