import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment, GetComment } from '../models/comment';
import { HttpCommentsService } from '../services/http-comments.service';
import { ProgressService } from '../services/progress.service';
import { CommentsHelper } from '../models/helper';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {

  private readonly _comments$ = new BehaviorSubject<Array<GetComment>>([]);

  constructor(
    private readonly http: HttpCommentsService,
    private readonly progress: ProgressService,
  ) { }

  get comments$(): Observable<Array<Comment>> {
    return this._comments$.pipe(
      map(getComments => CommentsHelper.MapGetComments(getComments))
    );
  }

  getComments(): void {
    this.progress.setProgress();

    this.http.getAllComments().subscribe(
      allComments  => this.getCommentsSucccess(allComments),
      error => this.error('Error', 'Loading comments failed.'),
      () => this.progress.clearProgress()
    );
  }

  addComment(newComment: GetComment): void {
    this.progress.setProgress();

    this.http.addComment(newComment).subscribe(
      _  => this.addCommentSuccess(newComment),
      error => this.error('Error', 'Adding comment failed, try again.'),
      () => this.progress.clearProgress()
    );
  }

  reply(newComment: GetComment, id: number): void {
    this.progress.setProgress();

    this.http.addComment(newComment).subscribe(
      _  => this.replySuccess(newComment, id),
      error => this.error('Error', 'Reply to comment failed, try again.'),
      () => this.progress.clearProgress()
    );
  }

  delete(id: number): void {
    this.progress.setProgress();

    this.http.deleteComment(id).subscribe(
      _  => this.deleteSuccess(id),
      error => this.error('Error', 'Delete comment failed, try again.'),
      () => this.progress.clearProgress()
    );
  }

  error(title: string, msg: string): void {
    // TODO: use global notifications here
  }

  private getCommentsSucccess(newComment: Array<Comment>): void {
    this._comments$.next(newComment);
  }

  private replySuccess(newComment: GetComment, id: number): void {
    const current = this._comments$.getValue();
    const index = current.findIndex(comment => comment.id === id);
    const insertAt = index >= 0 ? index : 0;
    current.splice(insertAt + 1, 0, newComment);

    this._comments$.next(current);
  }

  private deleteSuccess(id: number): void {
    const current = this._comments$.getValue();
    const index = current.findIndex(comment => comment.id === id);
    const insertAt = index >= 0 ? index : 0;
    current.splice(insertAt, 1);

    this._comments$.next(current);
  }

  private addCommentSuccess(newComment: GetComment): void {
    const current = this._comments$.getValue();
    const newComments = [newComment, ...current];
    this._comments$.next(newComments);
  }
}

