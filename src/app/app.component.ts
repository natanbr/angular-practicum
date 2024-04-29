import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './models/comment';
import { CommentsService } from './services/comments.service';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comments$: Observable<Array<Comment>>;

  constructor(private readonly commentsService: CommentsService) {
    this.comments$ = this.commentsService.comments$
  }

  ngOnInit(): void {
    this.commentsService.getComments();
  }
}

