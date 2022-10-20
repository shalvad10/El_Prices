import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/Http/user.service';
import appData from 'src/app/Services/Data/AppData';
import SharedMethods from 'src/app/Helpers/SharedMethods';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor( private router: Router , private route: ActivatedRoute, private userService: UserService) { }

  selectedTab = 'details';
  userID = this.route.snapshot.paramMap.get("id");
  user = null;
  rankData: any = [];

  ngOnInit(): void {
    this.userService.getByID(this.userID, SharedMethods.getToken(appData)).subscribe(( dt: any) => {
      console.warn(dt);
      this.user = dt;
    }, (err: any) => {
      console.log(err);
      if (err.status == 401) {
        window.localStorage.removeItem('authorizedUser');
        this.router.navigateByUrl('/users/auth');
      }
    });

  }

  selectRank(rank: any): void {
    console.error(rank);
  }

  get authorisedUser() {
    return appData.data.currentUser.username;
  }

  selectTab(val: any) {
    this.selectedTab = val;
  }
  public get userBalance() {
    return this.user.accounts[0].amount / appData.data.ammountDivide;
  }

  editUser() {

  }

}
