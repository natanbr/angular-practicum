import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'comments-summary',
  templateUrl: './comments-summary.component.html',
  styleUrls: ['./comments-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsSummeryComponent {

  @Input() comments: Array<Comment>;
}
