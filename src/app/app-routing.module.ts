import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupChatManagerComponent } from './components/group-chat-manager/group-chat-manager.component';
import { SetUpProfileComponent } from './components/set-up-profile/set-up-profile.component';

const routes: Routes = [
  { path: "", component: SetUpProfileComponent },
  { path: "group-chat/:userName", component: GroupChatManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
