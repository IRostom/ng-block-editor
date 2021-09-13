import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletComponent } from './components/bullet/bullet.component';
import { BulletListComponent } from './components/bullet-list/bullet-list.component';
import { NoteComponent } from './components/note/note.component';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

const components = [
  BulletComponent,
  BulletListComponent,
  NoteComponent,
  ActionMenuComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  exports: [...components],
})
export class BlockEditorModule {}
