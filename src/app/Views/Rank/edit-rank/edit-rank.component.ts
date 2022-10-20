import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { UserService } from 'src/app/Services/Http/user.service';

@Component({
  selector: 'app-edit-rank',
  templateUrl: './edit-rank.component.html',
  styleUrls: ['./edit-rank.component.scss']
})
export class EditRankComponent implements OnInit {

  public rankData: any = {};
  public dataLoaded = false;
  public levelID = Number.parseInt(this.route.snapshot.paramMap.get("id"));

  constructor( private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.userService.getLevel(SharedMethods.getToken(appData), this.levelID).subscribe( (data: any) => {
      this.rankData = data;
      this.dataLoaded = true;
      console.warn(data);
    }, (err: any) => {
      console.log(err);
      if (err.status == 401) {
        window.localStorage.removeItem('authorizedUser');
        this.router.navigateByUrl('/users/auth');
      }
    });
  }

  edit() {
    this.rankData.defaultLevel = false;
    this.userService.updateLevel(SharedMethods.getToken(appData), this.levelID, this.rankData).subscribe( (data: any) => {
      console.warn(data);
    }, (err: any) => {
      console.log(err);
      if (err.status == 401) {
        window.localStorage.removeItem('authorizedUser');
        this.router.navigateByUrl('/users/auth');
      }
    });
  }

}
