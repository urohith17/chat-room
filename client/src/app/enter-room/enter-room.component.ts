import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-room',
  templateUrl: './enter-room.component.html',
  styleUrls: ['./enter-room.component.scss']
})
export class EnterRoomComponent implements OnInit {
  roomName = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   enterRoom(){
    var input = this.roomName.trim().split(' ').join();
    if(input){
        this.router.navigateByUrl('/'+input);
    }
  }   
}
