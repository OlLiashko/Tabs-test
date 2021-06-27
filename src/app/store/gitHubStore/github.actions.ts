export class SearchRepos {
  static readonly type = '[GitHub] Change search repos param';

  constructor(public searchParam: string) {
  }
}

export class GetRepos {
  static readonly type = '[GitHub] Get repos by search params';

  constructor(public searchParam: string) {
  }
}

export class GetAmountOFSearchRepos {
  static readonly type = '[GitHub] Get amount of searching repositories';
}
