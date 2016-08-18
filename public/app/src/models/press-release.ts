export class PressRelease {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  text: string;
  thumbnail: string;

  constructor(id: number, imageUrl: string, thumbnail: string, title: string, description: string, text: string) {
    this.id = id;
    this.thumbnail = thumbnail;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.text = text;
  }
}
