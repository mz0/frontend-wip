import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
/*
Create the ThemeProvider using React.createContext()
The default value argument is only used when a component
does not have a matching Provider above it in the tree.
This default value can be helpful for testing components
in isolation without wrapping them.
For the purpose of this exercise,
it’s not relevant, so undefined can be used.

Then, inside the ThemeProvider component, define a new
piece of local state for the theme, which can be
a string either “light” or “dark”.

In the return statement, the ThemeContext.Provider
component should be rendered and wrap the children.

Finally, recall that the value prop for ThemeContext.Provider
is what gets injected down the tree as context.
Since the application needs both the theme value and
a way to toggle it,
two values are injected: theme and toggleTheme.
*/
