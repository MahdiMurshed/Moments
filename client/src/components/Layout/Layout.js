import React from "react";
import { Button } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { LOGOUT } from "../../constants/actionTypes";
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  LockOpenOutlined,
} from "@material-ui/icons";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";
import memoriesText from "../../images/memoriesText.png";
import memoriesLogo from "../../images/memoriesLogo.png";
import { useDispatch } from "react-redux";

export default function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/auth");
  };

  const menuItems = [
    {
      text: "All Posts",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Post",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
    {
      text: !user ? "Sign in" : "logout",
      icon: <LockOpenOutlined color="secondary" />,
      path: "/auth",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={1}
      >
        <Link to="/" className={classes.brandContainer}>
          <img
            component={Link}
            to="/"
            src={memoriesText}
            alt="icon"
            height="45px"
          />
          <img
            className={classes.image}
            src={memoriesLogo}
            alt="icon"
            height="40px"
          />
        </Link>
        <Toolbar className={classes.toolbar}>
          {user?.result && (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              {/* <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button> */}
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={
                item.text !== "logout" ? () => history.push(item.path) : logout
              }
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
