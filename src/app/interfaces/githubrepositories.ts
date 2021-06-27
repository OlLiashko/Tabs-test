export interface IGithubrepositories {
  total_count: number;
  incomplete_results: boolean;
  items: IRepoItem[];
  per_page: string;
}

export interface IRepoItem {
  login: string;
  id: number;
  avatar_url: string;
}
