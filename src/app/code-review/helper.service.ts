import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {
  }

  /** Use to log success messages
   * @param m is the message
   */
  logSuccess(m): void {
    console.log('Sucess:', m);
  }

  // -------------------------------

  /** Use to log success messages
   * @param m is the message
   */
  logWarning(w): void {
    console.warn('Warn:', w);
  }

  // -------------------------------

  /** Use to log error messages
   * @param m is the message
   */
  logError(e): void {
    console.warn('Error:', e);
  }
}
