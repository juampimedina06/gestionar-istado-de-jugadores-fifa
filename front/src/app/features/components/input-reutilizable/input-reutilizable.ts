import { Component, input, forwardRef, effect } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-reutilizable',
  imports: [ReactiveFormsModule],
  templateUrl: './input-reutilizable.html',
  styleUrl: './input-reutilizable.scss'
})
export class InputReutilizable {
 control = input.required<FormControl<any>>();
  type = input<'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'textarea' | 'imagen'>('text');
  label = input<string>('');
  placeholder = input<string>('');
  clase = input<string>('');

  onTouched = () => {};
  onChange = (_value: any) => {};

  constructor() {
    effect(() => {
      const value = this.control().value;
      this.onChange(value);
    });
  }

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable();
  }

  onFileSelected(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    // ejemplo: guardarlo en el control del formulario
    this.control().setValue(file);
  }
}
}
