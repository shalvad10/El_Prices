import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from 'src/app/Components/Base/ComponentBase';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss']
})
export class AddChatComponent extends ComponentBase implements OnInit {


  constructor( private router: Router ,ref: ChangeDetectorRef) {
    super(ref);
  }

  ngOnInit(): void {
  }

}
