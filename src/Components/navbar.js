import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { Grid, CardMedia } from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1
  },
  logoNeo: {
    height: "20px",
    width: "70px",
    margin: "10px",
    float: "left"
  },
  logoCliente: {
    height: "20px",
    width: "130px",
    margin: "10px",
    float: "right"
  },
  title: {
    textAlign: "center",
    paddingTop: "8px"
  }
};


const NavBar = props => {
  const { classes, titulo, logos } = props;
  
  return (
      <AppBar position="static" color="default">
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <CardMedia image={logos.neo} className={classes.logoNeo} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body2" align="center" color="inherit" className={classes.title}>
              {titulo}
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.direita}>
            <CardMedia image={logos.cliente} className={classes.logoCliente} />
          </Grid>
        </Grid>
      </AppBar>
  );
};

export default withStyles(styles)(NavBar);
