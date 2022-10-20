import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { GamesService } from 'src/app/Services/Http/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor(
    private router: Router,
    private gamesService: GamesService
    ) { }

  public tableData = {
    rows: [ 'ID', 'Bet', 'Bust', 'Profit', 'Payout', 'Hash', 'Game Finished', 'Actions'],
    data: []
  };
  public dataLoaded = false;

  ngOnInit(): void {
    this.gamesService.getFulloReport(SharedMethods.getToken(appData)).subscribe( (data: any) => {
      this.tableData.data = data.data;
      this.dataLoaded = true;
    }, (err: any) => {
      console.log(err);
      if (err.status == 401) {
        window.localStorage.removeItem('authorizedUser');
        this.router.navigateByUrl('/users/auth');
      }
    });
  }

  get height() { return window.innerHeight - 210; }
}

