import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/data/models/sponsor.model';
import { SponsorsService } from 'src/app/data/services/sponsors.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors: Sponsor[] = [];
  loader: boolean = true;
  constructor(
    private sponsorsService: SponsorsService
  ) { }

  ngOnInit(): void {
    this.sponsorsService.getAllSponsors().subscribe((data: any) => {
      data.forEach((sponsor: Sponsor) => {
        this.sponsors.push(sponsor);
      });
      this.loader = false;
    });
  }

}
