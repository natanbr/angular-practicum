import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from '../../models/commet';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  replyOn = false;

  constructor(private readonly commentsService: CommentsService) { }

  ngOnInit(): void {
    /* TODO: FIX ME! This init should be called only once, and not for any change to the main list */
    console.log(' - BIG #2 - OnInit for ID: ', this.comment.id);
  }

  get userFirstLatter(): string {
    return this.comment.user.name[0].toUpperCase();
  }

  enableReply(): void {
    this.replyOn = true;
  }

  delete(): void {
    this.commentsService.delete(this.comment.id);
  }

  disableReply(): void {
    this.replyOn = false;
  }
}
