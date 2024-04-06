import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-material-exercise',
  templateUrl: './material-exercise.component.html',
  styleUrl: './material-exercise.component.scss',
})
export class MaterialExerciseComponent {
  public name: string = '';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: '' },
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        this.name = result;
      });
  }
}
