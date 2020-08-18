import { Props, ReactNode, SelectHTMLAttributes, InputHTMLAttributes } from "react";

/**
 * Layout Component Types
 */
export interface LayoutProps extends Props<ReactNode> {
  emptyKeyword?: boolean
}
/**
 * UserProfile Component Types
 */
export interface UserProfileProps {
  image: string;
  name: string;
  link: string;
  position?: string;
}

export interface StyledUserProfileLink {
  position?: string;
}

export interface StyledImageProp {
  loaded?: boolean | false;
}
/**
 * Details Component Types
 */
export type DetailsProps = {
  name: string;
  forks?: string | number;
  stars?: string | number;
  language?: string | null;
  url: string;
  description: string;
  created: string;
  status?: string;
};

export interface StyledDetailsProps {
  status?: string;
}
/**
 * Card Component Types
 */
export type CardsProps = {
  item: array<any[]>;
};
/**
 * List Item Component Types
 */
export type ListItemProps = {
  data: any[];
  category: string;
  loading?: boolean;
  empty?: boolean;
  failed?: boolean;
  errorMessage?: string;
};
/**
 * Search Box Component Types
 */
export interface SearchBoxProps {
  keyword?: string;
  category?: string;
}
/**
 * Input Component Types
 */
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
}
/**
 * Dropdown Component Types
 */
export type DropdownOption = {
  text: string;
  value: string;
}

export interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
}

