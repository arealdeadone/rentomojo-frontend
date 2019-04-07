export class Comments {
  name: string;
  date: Date;
  likes: number;
  dislikes: number;
  text: string;

  constructor(name: string, date: Date, likes: number, dislikes: number, text: string){
    this.name = name;
    this.date = date;
    this.likes = likes;
    this.dislikes = dislikes;
    this.text = text;
  }
}
