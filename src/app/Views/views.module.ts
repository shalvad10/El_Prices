import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../Components/components.module';

import { AddUserComponent } from './Users/add-user/add-user.component';
import { UserListComponent } from './Users/user-list/user-list.component';
import { UserProfileComponent } from './Users/user-profile/user-profile.component';
import { LoginComponent } from './Authentication/login/login.component';

import { EditRankComponent } from './Rank/edit-rank/edit-rank.component';
import { RankListComponent } from './Rank/rank-list/rank-list.component';
import { AddGameComponent      } from './Game/Game-add/add-game.component';
import { GameListComponent     } from './Game/Game-list/game-list.component';

import { AddChatComponent } from './Chat/add-chat/add-chat.component';
import { ChatListComponent } from './Chat/chat-list/chat-list.component';


import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatepickerModule } from 'ng2-datepicker';


@NgModule({
  imports: [ ComponentsModule, NgSelectModule, DatepickerModule,  FormsModule, CommonModule ],
  declarations: [
    UserListComponent,
    UserProfileComponent,
    AddUserComponent,
    EditRankComponent,
    RankListComponent,
    ChatListComponent,
    AddChatComponent,
    LoginComponent,
    AddGameComponent,
    GameListComponent,
    MainComponent
  ],
  exports: [
    LoginComponent,
    EditRankComponent,
    RankListComponent,
    MainComponent
  ]
})
export class ViewsModule { }
