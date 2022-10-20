import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Http/user.service';
import { SectionsService } from 'src/app/Services/Http/sections.service';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
// import AppData from 'src/app/Data/AppData';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor( private sectionsService: SectionsService, private usersService: UserService) { }

  ngOnInit(): void {
  }

}
