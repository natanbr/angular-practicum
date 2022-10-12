import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Comment } from '../models/commet';

@Component({
  selector: 'comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsViewComponent {

  @Input() comments: Array<Comment>;
}

