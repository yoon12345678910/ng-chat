import { Component, OnInit, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatList, MatListItem } from '@angular/material/list';

// import { Action } from './shared/model/action';
// import { Event } from './shared/model/event';
// import { Message } from './shared/model/message';
// import { User } from './shared/model/user';
// import { SocketService } from './shared/services/socket.service';
// import { DialogUserComponent } from './dialog-user/dialog-user.component';
// import { DialogUserType } from './dialog-user/dialog-user-type';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

}
