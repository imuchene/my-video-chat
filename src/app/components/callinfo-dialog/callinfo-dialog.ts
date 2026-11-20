import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { DialogData } from '../../interfaces/dialog-data.interface';

@Component({
  imports: [
    MatFormFieldModule,
    ClipboardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSnackBarModule,
  ],
  selector: 'app-callinfo-dialog',
  styleUrl: './callinfo-dialog.scss',
  templateUrl: './callinfo-dialog.html',
})
export class CallinfoDialog {
  dialogRef = inject<MatDialogRef<CallinfoDialog>>(MatDialogRef);
  data = inject<DialogData>(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);

  showCopiedSnackbar() {
    this.snackBar.open('Peer ID Copied!', 'Hurrah', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
