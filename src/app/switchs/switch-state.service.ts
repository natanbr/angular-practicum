import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchStateService {

  private _switchState = false;

  get isChecked(): boolean {
    return this._switchState;
  }

  toogle(): void {
    this._switchState = !this._switchState;
  }
}
