import { ReactNode } from "react";

export interface ILayoutInterface {
  pageTitle?: string;
  children: ReactNode;
}

export interface ILinksInterface {
  label: string;
  route: string;
  showIcon?: boolean;
  target?: string | undefined;
}

export interface INavLinksInterface {
  navLinks: Array<ILinksInterface>;
  socialLinks?: Array<ILinksInterface>;
}
