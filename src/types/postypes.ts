export interface Comment {
  user: {
    _id: string; // User ID
    username: string; // User's name or username
    // other user fields
  };
  comment: string;
}

export interface Post {
  _id: string;
  description: string;
  image: string;
  likes: Array<{ user: string }>; // User IDs who liked the post
  comments: Comment[]; // Array of comments
}
