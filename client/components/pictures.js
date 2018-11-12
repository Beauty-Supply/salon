import React from 'react'
import {connect} from 'react-redux'
import history from '../history'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PictureCard from './picture'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'baseline'
  }
})

export class AllProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      pictures: []
    }
  }

  async componentDidMount() {
    const res = await axios.get(`/api/picture`)
    const pictures = res.data.pictures

    this.setState({pictures: pictures})
  }

  render() {
    if (!this.state.pictures) return <div>No Pictures</div>
    const {classes} = this.props

    return (
      <React.Fragment>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {this.state.pictures.map(picture => (
                <Grid key={picture.id} item>
                  <PictureCard picture={picture} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}
export default withStyles(styles)(AllProduct)
