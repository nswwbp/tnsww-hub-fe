import React, { createContext, useContext, useMemo, useState } from "react";
import { AppContextType } from "./appContext.types";

const AppContext = createContext<AppContextType>({} as AppContextType);

// Add additional here
export const AppContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  // component states
  const [theme, setTheme] = useState<AppContextType["theme"]>(null);
  const [blogPosts, setBlogPosts] = useState<AppContextType["blogPosts"]>([]);
  const [events, setEvents] = useState<AppContextType["events"]>([]);

  const [activePage, setActivePage] =
    useState<AppContextType["activePage"]>(null);

  // set up value here
  const value = useMemo(
    () => ({
      theme,
      setTheme,
      blogPosts,
      setBlogPosts,
      events,
      setEvents,
      activePage,
      setActivePage,
    }),
    [theme, activePage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
