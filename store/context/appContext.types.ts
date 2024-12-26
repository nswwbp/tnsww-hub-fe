import React from "react";

export type AppContextType = {
  theme: string | null;
  setTheme: React.Dispatch<React.SetStateAction<AppContextType["theme"]>>;

  blogPosts: Array<any>;
  setBlogPosts: React.Dispatch<
    React.SetStateAction<AppContextType["blogPosts"]>
  >;

  events: Array<any>;
  setEvents: React.Dispatch<React.SetStateAction<AppContextType["events"]>>;

  activePage: any;
  setActivePage: React.Dispatch<
    React.SetStateAction<AppContextType["activePage"]>
  >;
};
