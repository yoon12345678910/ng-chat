import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { Observer } from "rxjs";
import { Message } from "../model/message";
// import { Event } from "../model/event";

// import * as socketIo from 'socket.io-client';

// const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class ChatService {
  private messages: Message[] = [];

  public send(message: Message): void {
    this.messages.push(message);
  }

  // public onMessage(): Observable<Message> {
  // }

  // public onEvent(event: Event): Observable<any> {
  // }
}
