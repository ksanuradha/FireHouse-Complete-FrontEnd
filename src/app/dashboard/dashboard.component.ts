import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookmarkModel } from './dashboard-bookmark.model';
import { DashBoardService } from './dashboard-service';
import { DialogContentExampleDialog } from './dialog-window/dialog-content-example-dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookmarksArray: BookmarkModel[] = [];

  constructor(public dashBoardService : DashBoardService, public dialog: MatDialog) { }

  ngOnInit(): void {}

  public getData() {
    this.dashBoardService.getData().subscribe(bookMarksArrayList => {
      console.log(bookMarksArrayList);
     this.bookmarksArray = bookMarksArrayList.data;
    })
  }

  public deleteBookMark(id: number) {
    var result = confirm("Want to delete?");
    if(result) {
      this.dashBoardService.deleteBookMarka(id).subscribe( (deleteStatus) => {
        console.log(deleteStatus);
        this.loadData();
      });
    }
  }

  public updateBookMark(bookmark: any) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {data : bookmark});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

  private loadData() {
    this.dashBoardService.findAllatLoading().subscribe(latestData => {
      this.bookmarksArray = latestData.data;
    })
  }

}
