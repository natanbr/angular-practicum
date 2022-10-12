import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgressService } from '../services/progress.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  inProgress$: Observable<boolean>;

  constructor(
    private readonly progressService: ProgressService
  ) {
    this.inProgress$ = this.progressService.inProgress$;
  }

}
