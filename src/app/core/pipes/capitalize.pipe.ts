import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
		if (value) {
			if (args.length > 0 && args[0]) {
				const split = args[1] || ' ';
				const values = value.split(split);
				let str = '';
				for (let i = 0; i < values.length; i++) {
					str += values[i].charAt(0).toUpperCase() + values[i].slice(1).toLowerCase() + split;
				}
				return str.substr(0, str.length - 1);
			} else {
				return value.charAt(0).toUpperCase() + value.slice(1);
			}
		}
		return value;
	}

}
