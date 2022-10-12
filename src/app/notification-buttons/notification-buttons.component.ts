import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwitchStateService } from '../switchs/switch-state.service';

@Component({
  selector: 'notification-buttons',
  templateUrl: './notification-buttons.component.html',
  styleUrls: ['./notification-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationButtonsComponent implements OnInit {

  constructor(
    private readonly switchStateService: SwitchStateService
    ) { }

  ngOnInit(): void {
    console.log(' - TODO: Implement Global Notification -', );
  }

  onInfo(): void {
    console.log(' - TODO: Implement -', );
  }

  onSuccess(): void {
    console.log(' - TODO: Implement -', );
  }

  onError(): void {
    console.log(' - TODO: Implement -', );
  }

  toogle(): void {
    this.switchStateService.toogle();
  }

}
