import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Http/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { AppEnums } from 'src/app/Enums/appEnums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor( private toastr: ToastrService, private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

  onEnter() {
    this.authenticate();
  }
  
  authenticate() {
    this.userService.authenticate(this.username, this.password).subscribe( (data: any) => {
      if (data) {
        appData.data.currentUser = data.user;
        window.localStorage.setItem('authorizedUser', JSON.stringify( {user: data.user, token: data.accessToken.token} ));
        SharedMethods.alertNotification(this.toastr, 'success', { text: 'Welcome Back..!'});
        this.router.navigateByUrl('/');
      }
    });
  }

}
