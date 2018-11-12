import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import history from '../history'
import {connect} from 'react-redux'

const styles = {
  card: {
    width: 400,
    height: 400
  },
  actionArea: {
    height: 350
  },
  media: {
    height: 'auto',
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  }
}

function MakeCard(props) {
  const {classes, picture} = props

  return (
    <React.Fragment>
      <Card className={classes.card} raised={false}>
        <CardActionArea
          className={classes.actionArea}
          onClick={() => history.push(`/pictures/${picture.id}`)}
        >
          <CardMedia
            className={classes.media}
            image={picture.imageUrl}
            title={picture.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {picture.name}
            </Typography>
            <Typography component="h2">$ {picture.price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </React.Fragment>
  )
}

MakeCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MakeCard)
