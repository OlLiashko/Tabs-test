import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {debounceTime, distinctUntilChanged, map, pluck} from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  @Input() set searchStr(str: string) {
    this.search.setValue({searchInput: str});
  }

  @Input() placeholder = 'Search';

  @Input() set disabled(condition: boolean) {
    this.isDisabled = condition;
    if (condition) {
      this.search.controls.searchInput.disable();
    } else {
      this.search.controls.searchInput.enable();
    }
  }

  public isDisabled = false;
  public search = new FormGroup({
    searchInput: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
    this.searchSubscribe();
  }

  private searchSubscribe(): void {
    this.search.valueChanges
      .pipe(
        untilDestroyed(this),
        pluck('searchInput'),
        debounceTime(1000),
        map(val => val ? val.trim() : val),
        distinctUntilChanged(),
      ).subscribe(str => this.searchValue.emit(str));
  }
}
