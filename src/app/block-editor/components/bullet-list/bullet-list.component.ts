import { Component, Input, OnInit } from '@angular/core';
import { Bullet } from '../../interfaces/note.interface';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.scss'],
})
export class BulletListComponent implements OnInit {
  @Input() bullets: Array<Bullet> | undefined = [];
  // docs$: Observable<Doc[]>;
  constructor() {}

  ngOnInit(): void {
    // this.docs$ = this.mapii.noteBullets$.pipe(
    //   map((docs) => {
    //     if (docs) {
    //       // this.docs = docs.filter((doc) => doc.bullet.level === 0);
    //       this.docs = docs;
    //       return docs;
    //       // console.log('new value:', this.docs);
    //     }
    //   })
    // );
  }

  trackBullets(index: any, item: Bullet) {
    return index;
  }
}
