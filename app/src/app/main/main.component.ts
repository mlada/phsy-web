import { Component, OnInit } from '@angular/core';
import { CurrentStateService } from '../shared/current-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  isCurrentUser(): boolean {
    return CurrentStateService.currentUser?.value?.id !== null;
  }
  ngOnInit(): void {}
}
