import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/Enums/appEnums';
import appData from 'src/app/Services/Data/AppData';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {

  constructor(private router: Router) { }

  public tableHeight = '300px';
  public tableRows: any;
  public tableData: any;

  @Input() set data(val: any) {
    console.warn(val);
    this.tableRows = val.rows;
    this.tableData = val.data;//.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  }

  @Input() set height(val: any){
    this.tableHeight = val+'px';
  }

  ngOnInit() { }

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  gameFinished(status: string): boolean {
    return status == 'Finished';
  }
  
  tooltipText(data: any) {
    return data;
  }

  delete(id, name) {
    const modal = 'confirm';
    appData.data.modal.currentModal = modal;
    appData.data.modal.modals[modal].typeID     = AppEnums.main.store;
    appData.data.modal.modals[modal].targetName = name;
    appData.data.modal.modals[modal].targetID   = id;
  }

  edit(id) {
    this.router.navigate(['store/add'], { queryParams: { id: id } });
  }

}
