export class PressRelease {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  text: string;
  thumbnail: string;
  date: Date;
  link: String;

  constructor(id: number, link: String, imageUrl: string, thumbnail: string, title: string, description: string, text: string, date: Date) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.text = text;
    this.date = date;
    this.link = link;
  }
}
