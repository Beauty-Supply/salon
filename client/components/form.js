import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

class FormInfo extends React.Component {
  state = {
    name: '',
    email: '',
    number: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const {classes} = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="standard-name"
          label="Full Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-email"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />

        <TextField
          required
          id="standard-phone"
          label=" Phone Number"
          value={this.state.number}
          onChange={this.handleChange('number')}
          type="number"
          className={classes.textField}
          margin="normal"
        />
      </form>
    )
  }
}

FormInfo.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormInfo)
