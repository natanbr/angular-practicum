export interface User {
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  parent: Comment;
  timestamp: number;
  user: User;
  title?: string;
  link?: string;
  comment: string;
}

export interface GetComment extends Partial<Comment> {
  id: number;
  parentId?: number;
  timestamp: number;
  user: User;
  title?: string;
  link?: string;
  comment: string;
}

export interface PostComment extends Partial<Comment> {
  parentId?: number;
  title?: string;
  link?: string;
  comment: string;
}

export interface UpdateComment extends Partial<Comment> {
  id: number;
  title?: string;
  link?: string;
  comment?: string;
  timestamp: number;
}

export interface CommentResponse {
    comments: {
      data: Array<Comment>
    };
}
