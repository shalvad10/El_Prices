import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import appData from 'src/app/Services/Data/AppData';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements OnInit {

  constructor( private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() { }

  dropdownMenu(id: any) {
    document.getElementById(id).classList.toggle('menu-open');
  }

  get user() {
    return `${appData.data.currentUser.firstName} ${appData.data.currentUser.lastName}`;
  }

  get avatar() {
    return appData.data.avatars[appData.data.currentUser.avatarId];
  }

  changeRoute(param: any) {
    switch ( param ) {
      case '/'      : { this.router.navigateByUrl('');                    break;  }
      case 'users'  : { this.router.navigateByUrl('/users');              break;  }
      case 'game'  : { this.router.navigateByUrl('/game');               break;  }
      case 'rank'   : { this.router.navigateByUrl('/rank');               break;  }
      case 'chat'   : { this.router.navigateByUrl('/chat');               break;  }
    }
  }

  isActive(param: any) {
    const activeURL = this.activeRoute.snapshot['_routerState'].url;
    return '/'+ param == activeURL;
  }

  userProfile() {
    this.router.navigateByUrl('');
    setTimeout(() => {
      this.router.navigateByUrl(`/users/${appData.data.currentUser.id}`);
    }, 0);
  }

}
