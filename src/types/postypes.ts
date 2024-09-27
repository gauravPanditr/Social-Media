export interface Like {
  user: string; // User ID of the person who liked the post
}

export interface Post {
  _id: string; // Unique identifier for the post
  description: string; // Description of the post
  image: string; // URL of the post image
  likes: Like[]; // Array of likes associated with the post
}
