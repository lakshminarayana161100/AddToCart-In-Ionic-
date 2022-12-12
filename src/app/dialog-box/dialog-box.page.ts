import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  imgurl: any;
  name: any;
  price:any;
  description:any;
  category:any
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.page.html',
  styleUrls: ['./dialog-box.page.scss'],
})


export class DialogBoxPage implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxPage>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {
      console.log(data)
    
    }

  ngOnInit() {
  }
  onNoClick(): void {     // onNoClick is a function
    this.dialogRef.close();  // close the dailog
  }
}
