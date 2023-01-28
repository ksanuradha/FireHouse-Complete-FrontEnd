import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookmarkModel } from '../dashboard-bookmark.model';
import { DashBoardService } from '../dashboard-service';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog implements OnInit{
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    url: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    expirydate: new FormControl(''),
  });
  expireyDate: Date | undefined;
  updatedData: BookmarkModel = {
    id: 0,
    name: '',
    url: '',
    description: '',
    status: 0,
    expiryDate: {}
  };

  constructor( private dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: BookmarkModel, public dashBoardService: DashBoardService){ }

  ngOnInit(): void {
    console.log(this.data.expiryDate);
    this.form.controls['name'].setValue(this.data.name);
    this.form.controls['url'].setValue(this.data.url);
    this.form.controls['description'].setValue(this.data.description);
    this.form.controls['status'].setValue(this.data.status);
    this.form.controls['expirydate'].setValue(this.data.expiryDate);
  }

  public update() {
    this.updatedData.id = this.data.id;
    this.updatedData.url = this.form.value.url;
    this.updatedData.description = this.form.value.description;
    this.updatedData.status = this.form.value.status;
    this.updatedData.expiryDate = new Date(this.form.value.expirydate);
    this.dashBoardService.updateBookMarka(this.updatedData).subscribe();
  }

}
