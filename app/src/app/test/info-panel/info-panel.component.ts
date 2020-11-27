import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestResultModel } from '../form-group/form-group';
import { TimerService } from '../form-group/timer.service';
import { TestInfoComponent } from '../test-info/test-info.component';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnInit {
  @Input() public currentTime = 0;
  @Input() public results: TestResultModel[] = [];
  @Output() public startTesting: EventEmitter<void> = new EventEmitter(true);
  @Output() public stopTesting: EventEmitter<void> = new EventEmitter(true);
  @Output() public saveTesting: EventEmitter<void> = new EventEmitter(true);
  constructor(public dialog: MatDialog, public timer: TimerService) {}

  public openDialog(): void {
    const dialogRef = this.dialog.open(TestInfoComponent);
    if (this.timer.isStarted) {
      this.timer.pause();
    }
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (this.timer.isStarted) {
        this.timer.start();
      }
    });
  }

  ngOnInit(): void {}
}
