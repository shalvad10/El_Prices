import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { LogoComponent } from './logo/logo.component';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { UniversalViewComponent } from './universal-view/universal-view.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LastUsersComponent } from './last-users/last-users.component';
import { LastActionsComponent } from './last-actions/last-actions.component';
import { StatisticChartComponent } from './statistic-chart/statistic-chart.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { UserTableComponent } from './Tables/user-table/user-table.component';
import { GameTableComponent } from './Tables/game-table/game-table.component';
import { RankTableComponent } from './Tables/rank-table/rank-table.component';
import { StickyNotesComponent } from './sticky-notes/sticky-notes.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HeaderComponent,
    GameTableComponent,
    RankTableComponent,
    InfoBoxComponent,
    InfoPanelComponent,
    LogoComponent,
    MenuPanelComponent,
    UniversalViewComponent,
    UserCardComponent,
    LastUsersComponent,
    LastActionsComponent,
    StatisticChartComponent,
    StickyNotesComponent,
    LoaderComponent,
    UserTableComponent,
    DropdownSelectComponent
  ],
  exports: [
    HeaderComponent,
    GameTableComponent,
    RankTableComponent,
    InfoBoxComponent,
    InfoPanelComponent,
    LogoComponent,
    MenuPanelComponent,
    UniversalViewComponent,
    UserCardComponent,
    LastUsersComponent,
    LastActionsComponent,
    StatisticChartComponent,
    StickyNotesComponent,
    LoaderComponent,
    UserTableComponent,
    DropdownSelectComponent
  ]
})
export class ComponentsModule { }
