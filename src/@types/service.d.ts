export interface GitItems {
  id: number;
}

export interface ResponseData {
  total_count: number;
  items: Array<GitItems>;
}

export interface GitHubResponse {
  status: number,
  statusText: string,
  header: any[],
  data: Array<ResponseData>;
  request: XMLHttpRequest
}
