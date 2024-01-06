import { Component, OnInit } from '@angular/core';
import { Organizer } from 'src/app/data/models/organizer.model';
import { Tweet } from 'src/app/data/models/tweet.model';
import { OrganizersService } from 'src/app/data/services/organizers.service';
import { TweetsService } from 'src/app/data/services/tweets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  organizers: Organizer[] = [];
  tweets: Tweet[] = [];
  loader: boolean = true;

  constructor(
    private organizersService: OrganizersService,
    private tweetsService: TweetsService
  ) { }

  ngOnInit(): void {
    this.organizersService.getAllOrganizers().subscribe((res: any) => {
      res.forEach((organizer: Organizer) => {
        this.organizers.push(organizer);
      });
      this.tweetsService.getAllTweets().subscribe((res1: any) => {
        res1.forEach((tweet: Tweet) => {
          this.tweets.push(tweet);
        });
        this.loader = false;
      });
    });
  }

}
