import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Observable, of } from 'rxjs';

@Component({
  imports: [MatButtonModule, AsyncPipe],
  selector: 'app-video-chat',
  styleUrl: './video-chat.scss',
  templateUrl: './video-chat.html',
})
export class VideoChat {
  isCallStarted$: Observable<boolean> = of(false);

  showModal(test: boolean): Observable<boolean> {
    return of(test);
  }

  endCall(): void {
    console.log('test');
  }
}
