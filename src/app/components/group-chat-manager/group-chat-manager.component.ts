import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat.model';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-group-chat-manager',
  templateUrl: './group-chat-manager.component.html',
  styleUrls: ['./group-chat-manager.component.css']
})
export class GroupChatManagerComponent implements OnInit {
  user: User = new User();
  chats: Array<Chat> = [];

  constructor(private router: Router, public chatService: ChatService) { }

  ngOnInit(): void {
    try {
      //@ts-ignore
      this.user = JSON.parse(localStorage.getItem('user'));

      if (!this.user.userName) throw new Error("User undefined");

      // this.loadChats();

      this.setupLoadChatInterval();
    } catch (error) {
      alert("You must be logged in to access this page");
      this.onLogOut();
    }
  }

  setupLoadChatInterval() {
    this.loadChats();

    setInterval(() => {
      this.loadChats()
    }, 180000);
  }

  onSendChat(chat: Chat) {
    this.chatService.sendChatToAPI(chat)
      .then(async (res) => {
        if (res.status === 201) {
          this.loadChats();
        } else {
          throw new Error(await res.text());
        }
      }).catch((err) => {
        console.log(err);
        alert(err.message);
      })

    this.loadChats();
  }

  loadChats() {
    this.chatService.getChatsFromAPI()
      .then(async (res) => {
        if (res.status === 200) {
          this.chats = await res.json();
        } else {
          throw new Error(await res.text());
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Unable to load messages");
      })
  }

  onLogOut() {
    localStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
