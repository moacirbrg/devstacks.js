import { Subject } from '@libs/reactive/subject';
import { Observable } from '@libs/reactive/observable';

export class StringState {
  private _value: string = '';
  private _onValueChange$: Subject<string> = new Subject<string>();

  public constructor(value: string = '') {
    this._value = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this._onValueChange$.notify(value);
  }

  public asBoolean(): boolean {
    return Boolean(this.value);
  }

  public asNumber(): number {
    return Number(this.value);
  }

  public asObservable(): Observable<string> {
    return this._onValueChange$.asObservable();
  }

  public unsubscribeAll(): void {
    this._onValueChange$.unsubscribeAll();
  }
}