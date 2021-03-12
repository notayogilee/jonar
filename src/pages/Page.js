import React from 'react'
import {
  Typography,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    // height: "100%",
    // width: "0%",
  },
  gif: {
    width: "360px",
    height: "auto",
    pointerEvents: "none",
    // margin: "auto",
    alignItems: "center"
  },
  text: {
    fontFamily: "Roboto, sans serif",
    textAlign: "center",
    width: "420px",
    padding: "1rem",
    background: "#f3f4f8"
  }
})

const Page = ({ title, url, text }) => {
  const classes = useStyles()

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item className={classes.gif}>
        <iframe title={title} src={url} frameBorder="0" width="420px" height="400px" ></iframe>
      </Grid>
      <Grid item className={classes.text}>
        <Typography variant="h4" align="center" >
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Page
