import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private readonly _inProgress$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  get inProgress$(): Observable<boolean> {
    return this._inProgress$.asObservable();
  }

  setProgress(): void {
    this._inProgress$.next(true);
  }

  clearProgress(): void {
    this._inProgress$.next(false);
  }
}
