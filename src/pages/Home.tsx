import React from "react";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

const useHomeStyles = 

export const Home = () => {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <ul>
            <li>
              <IconButton aria-label="delete" color="primary">
                <TwitterIcon />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <SearchIcon />
              </IconButton>
              <Typography variant="h6">Поиск</Typography>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <Notifications />
              </IconButton>
              <Typography variant="h6">Уведомления</Typography>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <MailOutlineIcon />
              </IconButton>
              <Typography variant="h6">Сообщения</Typography>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <BookmarkBorderIcon />
              </IconButton>
              <Typography variant="h6">Закладки</Typography>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <ListAltIcon />
              </IconButton>
              <Typography variant="h6">Список</Typography>
            </li>
            <li>
              <IconButton aria-label="delete" color="primary">
                <PersonOutlineIcon />
              </IconButton>
              <Typography variant="h6">Профиль</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={7}>
          <Paper>xs</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>xs</Paper>
        </Grid>
      </Grid>
    </section>
  );
};
