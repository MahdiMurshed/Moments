import "./App.css";
//import from react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

const theme = createTheme({
  palette: {
    secondary: purple,
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/create" exact component={Form} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
