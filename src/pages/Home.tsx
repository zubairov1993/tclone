import React from "react";
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";

import { Tweet } from "../components/Tweet";
import { SideMenu } from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      height: 50,
      position: "relative",
      left: -10,
      marginBottom: 10,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderBottom: 0,
    borderTop: 0,
  },
  tweetsHeader: {
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    borderRadius: 0,
    padding: "10px 15px",

    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  tweetUserName: {
    color: grey[500],
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

export const Home = () => {
  const classes = useHomeStyles();

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper
            className={classes.tweetsWrapper}
            style={{ height: "100%" }}
            variant="outlined"
          >
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            {[
              ...new Array(20).fill(
                <Tweet
                  text={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur corporis commodi, neque facere dolor ipsum incidunt unde veritatis natus exercitationem ducimus excepturi quas non vero, odit rem culpa ab!"
                  }
                  user={{
                    fullname: "ara",
                    username: "sss",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1606942790567-5783bab8d944?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                  }}
                  classes={classes}
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по Твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
