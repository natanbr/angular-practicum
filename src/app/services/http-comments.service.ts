import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Comment, CommentResponse, PostComment, UpdateComment } from '../models/commet';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCommentsService {

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<Array<Comment>> {
    return this.http.get<CommentResponse>(`${environment.apiUrl}comments`).pipe(
      map(response => response.comments.data),
      tap(comments => comments.forEach(comment => comment.timestamp = comment.timestamp * 1000)));
  }

  addComment(comment: PostComment): Observable<number> {
   return this.http.post<number>(`${environment.apiUrl}comment`, comment);
  }

  updateComment(comment: UpdateComment): Observable<void> {
   return  this.http.post<void>(`${environment.apiUrl}comment/${comment.id}`, comment);
  }

  patchComment(comment: UpdateComment): Observable<void> {
   return this.http.patch<void>(`${environment.apiUrl}comment/${comment.id}`, comment);
  }

  deleteComment(id: number): Observable<void> {
    return  this.http.delete<void>(`${environment.apiUrl}comments/${id}`);
  }

}
