import { PressRelease } from '../models/press-release';

export class PressReleasesData {
  releases: PressRelease[] = [];

  constructor() {
    this.releases.push(
      new PressRelease(
        1,
        'https://sustain.gatech.edu/blog/solar-home-georgia-tech',
        'app/img/press-releases/coca-cola.jpeg',
        'app/img/press-releases/coca-cola-thumbnail.jpeg',
        'Georgia Tech Campus Sustainability',
        'Goergia Tech Solar Home features on the Campus Sustainability Blog.',
        `By luck or destiny, Atlanta is still here today and continues to thrive. Atlanta is known as a city in the forest with a tree canopy more dense than most US cities. Rem Koolhaus says, “Atlanta is a landscape and not a city."`,
        new Date(2016, 8, 20)
      )
    );
    this.releases.push(
      new PressRelease(
        1,
        'http://www.news.gatech.edu/2016/08/30/students-building-solar-home',
        'app/img/press-releases/coca-cola.jpeg',
        'app/img/press-releases/coca-cola-thumbnail.jpeg',
        'Georgia Tech News',
        'Georgia Tech News Center writes about Solar Home.',
        `By luck or destiny, Atlanta is still here today and continues to thrive. Atlanta is known as a city in the forest with a tree canopy more dense than most US cities. Rem Koolhaus says, “Atlanta is a landscape and not a city."`,
        new Date(2016, 8, 20)
      )
    );
    this.releases.push(
      new PressRelease(
        1,
        'http://nique.net/news/2016/02/05/tech-chosen-to-participate-in-solar-decathalon/',
        'app/img/press-releases/coca-cola.jpeg',
        'app/img/press-releases/coca-cola-thumbnail.jpeg',
        'Technique',
        'Technique writes about Georgia Tech and Solar Decathalon',
        `By luck or destiny, Atlanta is still here today and continues to thrive. Atlanta is known as a city in the forest with a tree canopy more dense than most US cities. Rem Koolhaus says, “Atlanta is a landscape and not a city."`,
        new Date(2016, 8, 20)
      )
    );
  }

  public getPressRelease(id: number) {
    return Promise.resolve(this.releases[id - 1]).then(
      response => response as PressRelease
    );
  }

  public getAllPressReleases() {
    return Promise.resolve(this.releases).then(
      res => res as PressRelease[]
    );
  }
}
