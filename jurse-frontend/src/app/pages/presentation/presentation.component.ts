import { Component, OnInit } from '@angular/core';
import { KeyNoteSpeaker } from 'src/app/data/models/key-note-speaker.model';
import { SpecialSession } from 'src/app/data/models/special-session.model';
import { KeyNoteSpeakersService } from 'src/app/data/services/key-note-speakers.service';
import { SpecialSessionsService } from 'src/app/data/services/special-sessions.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  images = [1, 17].map((n) => `https://picsum.photos/id/${n}/900/500`);
  loader: boolean = true;
  specialSessions: SpecialSession[] = [];
  keyNoteSpeakers: KeyNoteSpeaker[] = [];

  constructor(
    private specialSessionsService: SpecialSessionsService,
    private keyNoteSpeakersService: KeyNoteSpeakersService
  ) { }

  ngOnInit(): void {
    this.keyNoteSpeakersService.getAllKeyNoteSpeakers().subscribe((data: any) => {
      data.forEach((speaker: KeyNoteSpeaker) => {
        this.keyNoteSpeakers.push(speaker);
      });
      this.specialSessionsService.getAllSpecialSessions().subscribe((data1: any) => {
        data1.forEach((session: SpecialSession) => {
          this.specialSessions.push(session);
        });
        this.loader = false;
      });
    });
  }

}
