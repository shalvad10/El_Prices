import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { UserService } from 'src/app/Services/Http/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public tableData = {
    rows: [ 'ID', 'Name', 'UserName', 'Country', 'Address', 'Account Verified', 'Blocked', 'Actions'],
    data: []
  };
  public dataLoaded = false;

  constructor( private router: Router, private userService: UserService) { }


  ngOnInit(): void {
    this.userService.allUsers(SharedMethods.getToken(appData)).subscribe( (data: any) => {
      console.warn(data);
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
