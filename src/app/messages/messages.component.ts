import { Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-messages',
  standalone:true,
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  messageService = inject(MessageService);
}
