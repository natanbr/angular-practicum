import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SwitchStateService } from './switch-state.service';

/* TODO: FIX ME, this switch state is not being changed when the "toggle" button is click. */
@Component({
  selector: 'switchs',
  templateUrl: './switchs.component.html',
  styleUrls: ['./switchs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchsComponent {

  constructor(private readonly switchStateService: SwitchStateService) {
    console.log('- BUG #1 - TODO: FIX ME - switch not working', );
  }

  get isChecked(): boolean {
    return this.switchStateService.isChecked;
  }
}
