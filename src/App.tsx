import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme/theme";
import { Provider, useDispatch } from "react-redux";
import { AppDispatch, store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import { useEffect } from "react";
import { fetchData } from "./store/usersSlice";

/**
 *
 * Acceptance criteria:
 * 1. input the number of users to fetch from https://randomuser.me/api/?results=7
 * 2. run the search of users after typing
 * 3. when clicking start it should start a slideshow that will display fetched user list - one user displayed at once
 * 4. when clicking stop, the slideshow should stop
 *
 * Should have:
 * - store users data in redux
 * - error handling
 * - validations
 *
 * Restrictions:
 * - use only installed packages
 */

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </main>
  );
}

export default App;
