import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare const io: any;
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements AfterViewInit,AfterViewChecked {
  room = 'http://localhost:3000' + location.pathname;
  socket:any;
  message = '';
  messageList = [];
  @ViewChild('messageContainer') messageContainer:ElementRef
  constructor() { }
  ngAfterViewInit() {
    this.socket = io('http://localhost:3000');
    this.socket.emit('join room', this.room);
    this.socket.on('chat message', (msg) => {
      this.messageList.push({message:msg,type:'received'});
    });

  }
  ngAfterViewChecked(){
    this.messageContainer.nativeElement.scrollTo({ top: this.messageContainer.nativeElement.scrollHeight, behavior: 'smooth' })
  }
  sendMessage() {
    if (this.message) {
      this.socket.emit('chat message', { message: this.message, room: this.room });
      this.messageList.push({message:this.message,type:'sent'});
      this.message = '';
    }
  }

  onEnterClick(event) {
    if (event.keyCode === 13) {
      this.sendMessage();
    }
  }

}
