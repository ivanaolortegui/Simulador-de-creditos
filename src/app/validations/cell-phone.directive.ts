import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';


export function cellPhoneValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const cellPhoneDirective = new CellPhoneDirective();
    return cellPhoneDirective.validate(control);
  }
}

@Directive({
  selector: '[appCellPhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CellPhoneDirective, multi: true }]
})
export class CellPhoneDirective implements Validator {

  passwordsProhibidos = ['123456', 'querty', '123456789'];

  validate(control: import('@angular/forms').AbstractControl): import('@angular/forms').ValidationErrors {
    const password = <string>control.value;

    if (!password) { return; }
    if (password.length < 4) { return; }

    if (this.passwordsProhibidos.indexOf(password) !== -1) {
      return { 'cellPhoneValidation': { 'message': 'Escoge un mejor password' } }
    }

    if (password === password.toLowerCase()) {
      return { 'cellPhoneValidation': { 'message': 'Tu password debe de contener mayúsculas' } }
    }

    if (password === password.toUpperCase()) {
      return { 'cellPhoneValidation': { 'message': 'Tu password debe de contener minúsculas' } }
    }

    if (!/\d/.test(password)) {
      return { 'cellPhoneValidation': { 'message': 'Tu password debe de incluir un caracter numérico' } }
    }

    return null;



  }

  constructor() { }

}
