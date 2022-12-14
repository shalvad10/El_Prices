import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgSelectConfig } from '@ng-select/ng-select';
import SharedMethods from './Helpers/SharedMethods';
import appData from './Services/Data/AppData';
import { UserService } from './Services/Http/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tca-front';
  appLoaded = false;

  constructor( private router: Router, private userService: UserService, private config: NgSelectConfig) {
    this.config.notFoundText = 'Custom not found';
    this.config.appendTo = 'body';
    // set the bindValue to global config when you use the same 
    // bindValue in most of the place. 
    // You can also override bindValue for the specified template 
    // by defining `bindValue` as property
    // Eg : <ng-select bindValue="some-new-value"></ng-select>
    this.config.bindValue = 'value';
  }

  

  @HostListener('window:popstate', ['$event'])onPopState(event) {
    console.log(this.router.url);
  }

  public hasAttributeInHierarchy(el, attr) {
    if (el) {
      if (el.getAttribute(attr)) {
        return true;
      }
      return this.hasAttributeInHierarchy(el.parentElement, attr);
    }
    return false;
  }

  notMenuIcon(e) {
    return !(e.target as HTMLElement).classList.contains('nav-item') && !(e.target as HTMLElement).classList.contains('nav-links') && !(e.target as HTMLElement).classList.contains('fa-bars');
  }

  ngOnInit() {
    SharedMethods.loader(true);
    const authorizedUser = JSON.parse(window.localStorage.getItem('authorizedUser'));
    console.warn(authorizedUser);
    if ( authorizedUser === null) {
      this.appLoaded = true;
      SharedMethods.loader(false);
      this.router.navigateByUrl('/users/auth');
    } else {
      appData.data.currentUser = authorizedUser.user;
      appData.data.currentUser.token = authorizedUser.token;
      this.appLoaded = true;
      SharedMethods.loader(false);
    }
    document.addEventListener( 'click', (e) => {
      if ( this.notMenuIcon(e)) {
          if (document.body.classList.contains('sidebar-open')) {
            if (!this.hasAttributeInHierarchy(e.target, 'stayAlive')) {
              document.body.classList.remove('sidebar-open');
              document.body.classList.add('sidebar-collapse');
            }
          }
      }
    });

    if (window.innerWidth <= 991 ) {
      document.body.classList.remove('sidebar-open');
      document.body.classList.add('sidebar-collapse');
    }
  }

  public get modal() {
    return appData.data.modal.currentModal;
  }

  public get modalParams() {
    return appData.data.modal.modals[appData.data.modal.currentModal];
  }

  public get isLoading() {
    return appData.data.loading;
  }
}
