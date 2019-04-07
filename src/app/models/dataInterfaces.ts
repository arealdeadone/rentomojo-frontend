export interface Comments {
  _id: string;
  likes: number;
  dislikes: number;
  text: string;
  by: string;
  __v: number;
  name: string;
}

export interface CommentResponse {
  comments: Comments[];
}

export interface CommentPayload {
  comment: string;
  name: string;
}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

