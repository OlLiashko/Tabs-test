import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GithubSelectors, SearchRepos} from '../../store';
import {Observable} from 'rxjs';
import {IRepoItem} from '../../interfaces/githubrepositories';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  @Select(GithubSelectors.getRepos) searchResult$!: Observable<any>;
  @Select(GithubSelectors.getAmountOfSearchRepos) amount$!: Observable<number>;

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void {
  }

  searchRepos(event: string): void {
    this.store.dispatch(new SearchRepos(event));
  }

  // getRepos(): void {
  //   this.searchResult$
  //     .subscribe(value => {
  //       console.log(value);
  //     });
  //
  //   this.amount$
  //     .subscribe(value => {
  //       console.log(value);
  //     });
  // }
}
