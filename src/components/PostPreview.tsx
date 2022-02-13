import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Post } from "../API";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
  },
});
type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props): ReactElement => {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <Grid
        container
        style={{
          padding: "1rem 0rem",
          margin: "1.5rem 0rem 0rem 0rem",
        }}
        spacing={2}
      >
        <Grid item xs={12} sm={2} justifyContent="center" alignItems="center">
          <Grid
            container
            direction="column"
            alignItems="center"
            className={classes.root}
          >
            <Grid item>
              <IconButton color="inherit">
                {" "}
                <ArrowUpwardIcon />
              </IconButton>
            </Grid>
            <Grid item>23</Grid>
            <Grid item>
              <IconButton color="inherit">
                <ArrowDownwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10} className={classes.root}>
          <Grid container item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="body1">
                  Posted by <b>{post.owner} </b> at <b>{post.createdAt}</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h2">{post.title}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{post.title}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PostPreview;
