import { useState, useEffect } from 'react'
import {
  NavigateNext,
  NavigateBefore
} from '@material-ui/icons'
import {
  IconButton,
  Grid,
} from '@material-ui/core'
import Page from './pages/Page'
import { makeStyles } from '@material-ui/core/styles'

// blue is #307fe2
// orange is #ff9e1b
// white is #fff

// navbar is #f3f4f8
// logo fontfamily is 

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f8"
  },
  button: {
    background: "#ff9e1b",
    color: "#307fe2",
    "&:hover": {
      background: "#e87d0a"
    },
    margin: "0.5rem"
  }
})

function App() {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [title, setTitle] = useState("Graduation")
  const [url, setUrl] = useState("https://giphy.com/embed/3oEduUGL2JaSK7oS76")
  const [text, setText] = useState("There once was a guy named Lee. He graduated from a coding bootcamp and was excited to start his journey as a developer.")

  const handleNextPage = () => {
    const nextPage = page + 1
    setPage(nextPage)
  }

  const handlePreviousPage = () => {
    const previousPage = page - 1
    setPage(previousPage)
  }


  useEffect(() => {
    if (page === 0) {
      setTitle("Graduation");
      setUrl("https://giphy.com/embed/3oEduUGL2JaSK7oS76");
      setText("There once was a guy named Lee. He graduated from a coding bootcamp and was excited to start his journey as a developer.")
    }
    if (page === 1) {
      setTitle("Applied to Jonar");
      setUrl("https://giphy.com/embed/AYECTMLNS4o67dCoeY");
      setText("Lee's first interview was with Celine and Ayleen of Jonar. They were very supportive. Even though Lee was nervous, they made him feel at ease.")
    }
    if (page === 2) {
      setTitle("Rejection");
      setUrl("https://giphy.com/embed/eMZsTyFeJHCSuMcbhd")
      setText("Unfortunately for Lee, there were more qualified applicants and he was not moving forward in the application process.")
    }
    if (page === 3) {
      setTitle("Lee Keeps Going");
      setUrl("https://giphy.com/embed/M9kgjEsLG6LMbYC9dl")
      setText("So Lee kept coding and applying to jobs, coding and applying to jobs...")
    }
    if (page === 4) {
      setTitle("Take Two!");
      setUrl("https://giphy.com/embed/CjmvTCZf2U3p09Cn0h")
      setText("Now, Lee is back and prepared!")
    }
  }, [page])

  return (
    <Grid
      container
      className={classes.container}
      justify="center"
      alignItems="center"
      direction="row"
    >
      <Grid item>
        {page > 0 &&
          <IconButton className={classes.button} onClick={handlePreviousPage}>
            <NavigateBefore fontSize="large" />
          </IconButton>
        }
      </Grid>
      <Grid item>
        <Page title={title} url={url} text={text} />
      </Grid>
      <Grid item>
        {page < 4 &&
          <IconButton className={classes.button} onClick={handleNextPage}>
            <NavigateNext fontSize="large" />
          </IconButton>
        }
      </Grid>
    </Grid>
  );
}

export default App;
