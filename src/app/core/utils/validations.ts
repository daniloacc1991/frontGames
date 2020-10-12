import { AbstractControl, ValidatorFn } from '@angular/forms';

export namespace Validations {

  export function number(control: AbstractControl): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any; } => {
      try {
        if (control.value != null && control.value.match(/^\d+$/g)) {
          return null;
        } else {
          return { number: true };
        }
      } catch (e) {
        return null;
      }
    };
  }

  export function json<T>(keys: (keyof T)[]): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any; } => {
      const valCurrent = c.value;
      let isValid = 0;
      keys.forEach((_key) => {
        if (valCurrent != null && valCurrent.hasOwnProperty(_key)) {
          isValid++;
        }
      });
      return isValid === keys.length ? null : valCurrent === '' || valCurrent === null ? null : { json: true };
    };
  }

}
