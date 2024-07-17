export interface Comment {
  text: string;
  saved?: boolean;
  id: string;
}

export const SAVED_COMMENTS = 'savedComments';
