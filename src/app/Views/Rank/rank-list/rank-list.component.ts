import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { GamesService } from 'src/app/Services/Http/games.service';
import { UserService } from 'src/app/Services/Http/user.service';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss']
})
export class RankListComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  public tableData = {
    rows: [ 'ID', 'Name', 'Minimum Bets/Bits', 'Network Earnings', 'Actions'],
    data: []
  };
  public dataLoaded = false;

  ngOnInit(): void {
    this.userService.getLevels(SharedMethods.getToken(appData)).subscribe( (data: any) => {
      this.tableData.data = data;
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

