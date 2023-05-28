import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'increment-input',
  templateUrl: './increment-input.component.html',
  styleUrls: ['./increment-input.component.css'],
})
export class IncrementInputComponent {

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  color: string = 'default';

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color
  }

  private parseNumber(num: any): number {
    return +num;
  }

  private parseBoolean(bool: any): boolean {
    return !!bool;
  }

  // ------ CHILDREN ------
  _valueChildren: number = 0;
  _stepChildren: number = 1;
  _minChildren: number = 0;
  _maxChildren: number = 10;
  _wrapChildren: boolean = false;

  @Input('valueChildren')
  set inputValueChildren(_valueChildren: number) {
    this._valueChildren = this.parseNumber(_valueChildren);
  }

  @Input()
  set stepChildren(_stepChildren: number) {
    this._stepChildren = this.parseNumber(_stepChildren);
  }

  @Input()
  set minChildren(_minChildren: number) {
    this._minChildren = this.parseNumber(_minChildren);
  }

  @Input()
  set maxChildren(_maxChildren: number) {
    this._maxChildren = this.parseNumber(_maxChildren);
  }

  @Input()
  set wrapChildren(_wrapChildren: boolean) {
    this._wrapChildren = this.parseBoolean(_wrapChildren);
  }

  incrementValueChildren(stepChildren: number = 1): void {
    let inputValueChildren = this._valueChildren + stepChildren;

    if (this._wrapChildren) {
      inputValueChildren = this.wrappedValueChildren(inputValueChildren);
    }

    this._valueChildren = inputValueChildren;
  }

  private wrappedValueChildren(inputValueChildren:number): number {
    if (inputValueChildren > this._maxChildren) {
      return this._minChildren + inputValueChildren - this._maxChildren;
    }

    if (inputValueChildren < this._minChildren) {

      if (this._maxChildren === Infinity) {
        return 0;
      }

      return this._maxChildren + inputValueChildren;
    }

    return inputValueChildren;
  }

  shouldDisableDecrementChildren(inputValueChildren: number): boolean {
    return !this._wrapChildren && inputValueChildren <= this._minChildren;
  }

  shouldDisableIncrementChildren(inputValueChildren: number): boolean {
    return !this._wrapChildren && inputValueChildren >= this._maxChildren;
  }

  // ------ ADULTS ------
  _valueAdults: number = 0;
  _stepAdults: number = 1;
  _minAdults: number = 0;
  _maxAdults: number = 10;
  _wrapAdults: boolean = false;

  @Input('valueAdults')
  set inputValueAdults(_valueAdults: number) {
    this._valueAdults = this.parseNumber(_valueAdults);
  }

  @Input()
  set stepAdults(_stepAdults: number) {
    this._stepAdults = this.parseNumber(_stepAdults);
  }

  @Input()
  set minAdults(_minAdults: number) {
    this._minAdults = this.parseNumber(_minAdults);
  }

  @Input()
  set maxAdults(_maxAdults: number) {
    this._maxAdults = this.parseNumber(_maxAdults);
  }

  @Input()
  set wrapAdults(_wrapAdults: boolean) {
    this._wrapAdults = this.parseBoolean(_wrapAdults);
  }

  incrementValueAdults(stepAdults: number = 1): void {
    let inputValueAdults = this._valueAdults + stepAdults;

    if (this._wrapAdults) {
      inputValueAdults = this.wrappedValueAdults(inputValueAdults);
    }

    this._valueAdults = inputValueAdults;
  }

  private wrappedValueAdults(inputValueAdults:number): number {
    if (inputValueAdults > this._maxAdults) {
      return this._minAdults + inputValueAdults - this._maxAdults;
    }

    if (inputValueAdults < this._minAdults) {

      if (this._maxAdults === Infinity) {
        return 0;
      }

      return this._maxAdults + inputValueAdults;
    }

    return inputValueAdults;
  }

  shouldDisableDecrementAdults(inputValueAdults: number): boolean {
    return !this._wrapAdults && inputValueAdults <= this._minAdults;
  }

  shouldDisableIncrementAdults(inputValueAdults: number): boolean {
    return !this._wrapAdults && inputValueAdults >= this._maxAdults;
  }
}
