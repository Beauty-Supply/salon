import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

class DateSelector extends React.Component {
  constructor() {
    super()
    this.state = {
      datetime: Date
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({datetime: evt.target.value})
  }

  render() {
    const {classes} = this.props
    console.log(this.state)
    return (
      <form className={classes.container}>
        <TextField
          onChange={this.handleChange}
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    )
  }
}

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(DateSelector)
