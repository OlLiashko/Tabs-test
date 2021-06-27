export class SearchRepos {
  static readonly type = '[GitHub] Change search repos param';

  constructor(public searchParam: string) {
  }
}
