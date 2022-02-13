import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendChatComponent } from './components/send-chat/send-chat.component';
import { AllChatComponent } from './components/all-chat/all-chat.component';
import { ChatComponent } from './components/chat/chat.component';
import { SetUpProfileComponent } from './components/set-up-profile/set-up-profile.component';
import { GroupChatManagerComponent } from './components/group-chat-manager/group-chat-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SendChatComponent,
    AllChatComponent,
    ChatComponent,
    SetUpProfileComponent,
    GroupChatManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
