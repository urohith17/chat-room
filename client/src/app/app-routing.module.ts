import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { EnterRoomComponent } from './enter-room/enter-room.component';

const routes: Routes = [
  { path: ':id', component: ChatRoomComponent },
  {
    path:'',
    component: EnterRoomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
