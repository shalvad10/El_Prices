import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent implements OnInit {

  constructor() { }

  
  @Output() select :EventEmitter<any> = new EventEmitter<any>();

  @Input() set items(val: any) {
    if ( val ) {
      this._items = val;
      console.warn(val);
      this.selectedID = val[0].id;
      this.dataLoaded = true;
      this.select.emit(val[0]);
    }
  }
  public dataLoaded = false;
  public _items: any;
  public selectedID!:number;
  public oppened: boolean = false;

  ngOnInit(): void { }

  toggleDropdown(): void {
    this.oppened = ! this.oppened;
  }

  selectItem(item: any): void {
    this.selectedID = item.id;
    this.select.emit(item);
    this.toggleDropdown();
  }

  get selected(): any {
    return this._items.filter((item:any) => item.id == this.selectedID)[0]
  }

}
