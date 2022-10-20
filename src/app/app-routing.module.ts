import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './Views/main/main.component';
import { UserListComponent } from './Views/Users/user-list/user-list.component';
import { UserProfileComponent } from './Views/Users/user-profile/user-profile.component';
import { AddUserComponent } from './Views/Users/add-user/add-user.component';
import { LoginComponent } from './Views/Authentication/login/login.component';
import { AddGameComponent } from './Views/Game/Game-add/add-game.component';
import { GameListComponent } from './Views/Game/Game-list/game-list.component';
import { RankListComponent } from './Views/Rank/rank-list/rank-list.component';
import { EditRankComponent } from './Views/Rank/edit-rank/edit-rank.component';


const routes: Routes = [
  { path: '',                 component: MainComponent                },
  { path: 'users',            component: UserListComponent            },
  { path: 'users/register',   component: AddUserComponent             },
  { path: 'users/auth',       component: LoginComponent               },
  { path: 'users/:id',        component: UserProfileComponent         },
  { path: 'game',             component: GameListComponent            },
  { path: 'game/add',         component: AddGameComponent             },
  { path: 'rank',             component: RankListComponent            },
  { path: 'rank/:id',         component: EditRankComponent            },
  { path: '**', redirectTo: '', pathMatch: 'full'                     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
