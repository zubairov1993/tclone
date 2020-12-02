import React from "react";
import {
  Avatar,
  Container,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";

const useHomeStyles = makeStyles(() => ({
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
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
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
  tweetsUserName: {
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
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton
                className={classes.logo}
                aria-label=""
                color="primary"
              >
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <SearchIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Поиск
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <Notifications className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Уведомления
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <MailOutlineIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Сообщения
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <BookmarkBorderIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Закладки
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <ListAltIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Список
              </Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton aria-label="">
                <PersonOutlineIcon className={classes.sideMenuListItemIcon} />
              </IconButton>
              <Typography
                className={classes.sideMenuListItemLabel}
                variant="h6"
              >
                Профиль
              </Typography>
            </li>
          </ul>
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
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Grid container spacing={3}>
                <Grid item xs={1}>
                  <Avatar
                    alt="User Avatar"
                    src="https://images.unsplash.com/photo-1606827728563-d08486ce78c3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                </Grid>
                <Grid item xs={11}>
                  <Typography>
                    <b>Жуль верн</b>{" "}
                    <span className={classes.tweetsUserName}>@жи-есть</span>
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Commodi, eligendi temporibus. Nam labore, neque nesciunt
                    facere quos sapiente, asperiores repellendus, nobis iure
                    quam minus architecto tempore vitae quidem molestiae libero!
                  </Typography>
                  <div>
                    <IconButton>
                      <CommentIcon style={{ fontSize: 16 }} />
                      <span style={{ fontSize: 14 }}>1</span>
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Поиск по Твиттеру" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};
