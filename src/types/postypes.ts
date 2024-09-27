export interface Like {
  user: string; 
}
export interface Comment{
  user: string; 

}
export interface Post {
  _id: string; 
  description: string; 
  image: string; 
  likes: Like[]; 
  comment:Comment[];

}


