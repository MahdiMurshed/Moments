import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;

export default makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 50px",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    date: {
      flexGrow: 1,
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "400px",
      [theme.breakpoints.down("sm")]: {
        width: "auto",
      },
    },
    brandContainer: {
      display: "flex",
      alignItems: "center",
    },
    image: {
      marginLeft: "10px",
      marginTop: "5px",
    },
  };
});
