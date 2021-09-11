import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Bullet } from '../../interfaces/note.interface';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss'],
})
export class BulletComponent implements OnInit {
  @Input() bullet: Bullet = {} as Bullet;

  // @Output() valueChange = new EventEmitter<Doc>();
  // @Output() action = new EventEmitter<any>();
  // @ViewChild("bullet") bullet: ElementRef;
  form: FormGroup = {} as FormGroup;
  // title = new FormControl('');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.bullet?.title ?? '',
    });

    // this.title.valueChanges
    //   .pipe(debounceTime(1000), distinctUntilChanged())
    //   .subscribe((value) => {
    //     // update title
    //     if (this.doc) {
    //       this.doc.bullet.title = value;
    //       this.valueChange.emit(this.doc);
    //     } else {
    //       this.valueChange.emit(value);
    //       this.title.setValue("");
    //     }
    //     // console.log(value);
    //   });
  }

  // ngAfterViewInit() {
  //   this.mapii.focus$.subscribe((doc) => {
  //     if (
  //       doc &&
  //       doc.id === this.doc.id &&
  //       doc.bullet.order === this.doc.bullet.order
  //     ) {
  //       // console.log('found it');
  //       this.bullet.nativeElement.focus();
  //     }
  //   });
  // }
}
