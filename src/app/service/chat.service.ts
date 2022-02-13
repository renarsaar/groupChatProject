import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  apiUrl: string = 'https://crudcrud.com/api/f8555e87e9c648d1866d6a31c4ebb375';
  sendChatEndPoint: string = '/chats';
  getChatEndPoint: string = '/chats';
  allHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  constructor() { }

  sendChatToAPI(chat: Chat): Promise<Response> {
    return fetch(
      this.apiUrl + this.sendChatEndPoint,
      {
        method: 'POST',
        headers: this.allHeaders,
        body: JSON.stringify(chat)
      }
    );
  }

  getChatsFromAPI(): Promise<Response> {
    return fetch(
      this.apiUrl + this.getChatEndPoint,
      {
        method: 'GET',
        headers: this.allHeaders
      }
    );
  }
}
