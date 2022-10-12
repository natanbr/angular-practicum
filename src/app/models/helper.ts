import { GetComment, Comment } from './commet';

export class CommentsHelper {
  static MapGetComments(getComments: Array<GetComment>): Array<Comment> {
    if (!getComments || getComments.length <= 0) return [];

    /* TODO: FIX ME! this function is called twice for the same event, should be called only once! */
    console.log('- BUG #3 - TODO: FIX ME - called twice', );

    const commentsDict = new Map<number, Comment>();

    return getComments.map(comment => {
      const { parentId, ...rest } = comment;
      const viewComment: Comment = {
        parent: commentsDict.get(parentId),
        ...rest
      };

      commentsDict.set(comment.id, viewComment);

      return viewComment;
    });

  }
}
