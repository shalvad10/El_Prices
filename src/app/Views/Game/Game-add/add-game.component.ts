import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import SharedMethods from 'src/app/Helpers/SharedMethods';
import appData from 'src/app/Services/Data/AppData';
import { GamesService } from 'src/app/Services/Http/games.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  IDCode        : string  = '';
  name          : string  = '';
  lct           : string  = '';
  id            : number;
  contactNumber : number;
  eMail         : string = '';
  showWarnings  : boolean = false;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams.id) {
      this.id = Number.parseInt(this.activatedRoute.snapshot.queryParams.id);
      this.gamesService.getByID(this.id, SharedMethods.getToken(appData)).subscribe( (dt: any) => {
        this.IDCode       = dt.identificationCode;
        this.name         = dt.name;
        this.lct          = dt.address;
        this.eMail        = dt.email;
        this.contactNumber = dt.contactNumber;
      });
    }
  }

  public get text() {
    return this.id == undefined ? 'დამატება' : 'განახლება';
  }
  
  send() {
    if (this.IDCode.length > 0 && this.name.length > 0 && this.lct.length > 0 && this.eMail.length > 0 && this.contactNumber > 0) {
      SharedMethods.loader(true);
      this.gamesService.create(this.IDCode, this.name, this.eMail, this.contactNumber.toString(), this.lct, SharedMethods.getToken(appData)).subscribe( (dt: any) => {
        console.warn(dt);
        if ( dt) {
          appData.data.stores.allStores.push(dt);
          SharedMethods.loader(false);
          SharedMethods.alertNotification(this.toastr,'success', { text: `ოპერაცია წარმატებით განხორციელდა`})
          this.router.navigateByUrl('store');
        }
      });
    } else {
      this.showWarnings = true
    }
  }
  
  edit() {
    if (this.IDCode.length > 0 && this.name.length > 0 && this.lct.length > 0 && this.eMail.length > 0 && this.contactNumber > 0) {
      this.gamesService.edit(this.id, this.IDCode, this.name, this.eMail, this.contactNumber.toString(), this.lct, SharedMethods.getToken(appData)).subscribe( (dt: any) => {
        console.warn(dt);
        if ( dt ) {
          appData.data.stores.allStores = appData.data.stores.allStores.filter( st => st.id !== dt.id);
          setTimeout( () => {
            appData.data.stores.allStores.push(dt);
            SharedMethods.alertNotification(this.toastr,'success', { text: `ოპერაცია წარმატებით განხორციელდა`})
            this.router.navigateByUrl('store');
          }, 1);
        }
      });
    } else {
      this.showWarnings = true
    }
  }

}
