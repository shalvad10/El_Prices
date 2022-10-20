import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppEnums } from 'src/app/Enums/appEnums';
import appData from 'src/app/Services/Data/AppData';

@Component({
  selector: 'app-rank-table',
  templateUrl: './rank-table.component.html',
  styleUrls: ['./rank-table.component.scss']
})
export class RankTableComponent implements OnInit {

  constructor(private router: Router) { }

  public tableHeight = '300px';
  public tableRows: any;
  public tableData: any;

  @Input() set data(val: any) {
    this.tableRows = val.rows;
    this.tableData = val.data;//.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
  }

  @Input() set height(val: any){
    this.tableHeight = val+'px';
  }

  ngOnInit() { }

  
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
    this.router.navigateByUrl(`/rank/${id}`);
  }

}
