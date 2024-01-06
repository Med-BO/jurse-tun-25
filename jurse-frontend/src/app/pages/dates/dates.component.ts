import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface DateProgram {
	title: string;
	date: string;
	applicationDeadline: string;
}

const EVENTS: DateProgram[] = [
	{
		title: 'Event 1',
		date: '17 May, 2025',
		applicationDeadline: '17 Apr, 2025',
	},
	{
		title: 'Event 2',
		date: '18 May, 2025',
		applicationDeadline: '16 May, 2025',
	},
	{
		title: 'Event 3',
		date: '19 May, 2025',
		applicationDeadline: '16 May, 2025',
	},
	{
		title: 'Event 4',
		date: '19 May, 2025',
		applicationDeadline: '16 May, 2025',
	},
];

function search(text: string): DateProgram[] {
	return EVENTS.filter((event) => {
		const term = text.toLowerCase();
		return (
			event.title.toLowerCase().includes(term) ||
			event.date.includes(term) ||
			event.applicationDeadline.includes(term)
		);
	});
}

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  events$: Observable<DateProgram[]>;
	filter = new FormControl('', { nonNullable: true });

	constructor() {
		this.events$ = this.filter.valueChanges.pipe(
			startWith(''),
			map((text) => search(text)),
		);
	}

  ngOnInit(): void {
  }

}
