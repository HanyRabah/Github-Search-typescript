export const MIN_INPUT_LENGTH = 3;
export const DROPDOWN_OPTIONS = [
  { text: "Users", value: "users" },
  { text: "Repositories", value: "repositories" },
  { text: "Issues", value: "issues" },
]

export enum RquestStatus {
  Pending,
  Loading,
  Success,
  Failure,
  Empty,
}

export enum Routes {
  MAIN = "/"
};

export const API_URI = "https://api.github.com/search"
