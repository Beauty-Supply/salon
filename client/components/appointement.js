import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {RadioGroup} from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import className from 'classnames'
import TextField from '@material-ui/core/TextField'
import DateSelector from './DateSelector'
import moment from 'moment'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import {connect} from 'react-redux'
import {thunkAll, thunkPost} from '../store/appointement'
//import FormInfo from './form'

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  },
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

function getSteps() {
  return [
    'Enter your information',
    'Choose an available Day and time for your appointment',
    'New Step',
    'Confirm'
  ]
}

function getStepContent(
  step,
  classes,
  state,
  handleChange,
  handleClose,
  handleOpen,
  isSchedule
) {
  switch (step) {
    case 0:
      return (
        <form className={classes.container}>
          <TextField
            required
            id="standard-name"
            label="Full Name"
            className={classes.textField}
            value={state.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-email"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange('email')}
            margin="normal"
          />

          <TextField
            required
            id="standard-phone"
            label=" Phone Number"
            value={state.number}
            onChange={handleChange('number')}
            type="number"
            className={classes.textField}
            margin="normal"
          />
        </form>
      ) /*`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`*/

    case 1:
      return (
        <form className={classes.container}>
          <TextField
            onChange={handleChange('day')}
            id="datetime-local"
            name="day"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2018-10-10T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      ) /*'An ad group contains one or more ads which target a shared set of keywords.'*/
    case 2:
      return (
        <div>
          <form>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-controlled-open-select">
                Choose a time
              </InputLabel>
              <Select
                open={state.open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={state.time}
                onChange={handleChange('time')}
                inputProps={{
                  name: 'time',
                  id: 'demo-controlled-open-select'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem disabled={isSchedule(9)} value={9}>
                  09:00 AM
                </MenuItem>
                <MenuItem disabled={isSchedule(11)} value={11}>
                  11:00 AM
                </MenuItem>
                <MenuItem disabled={isSchedule(14)} value={14}>
                  02:00 PM
                </MenuItem>
                <MenuItem disabled={isSchedule(16)} value={16}>
                  04:00 PM
                </MenuItem>
                <MenuItem disabled={isSchedule(18)} value={18}>
                  06:00 PM
                </MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
      )
    /*`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`*/
    case 3:
      return
    default:
      return 'Unknown step'
  }
}

class Appointement extends React.Component {
  constructor() {
    super()

    this.state = {
      activeStep: 0,
      name: '',
      email: '',
      number: '',
      user: {},
      appointmentDate: Date,
      open: false,
      time: '',
      scheduleDate: [],
      isPicked: false,
      day: ''
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.isSchedule = this.isSchedule.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleClose = () => {
    this.setState({open: false})
  }

  isSchedule(time) {
    for (let i = 0; i <= this.props.apptmnts.length; i++) {
      if (this.state.day.slice(0, 10) + time + '' === this.props.apptmnts[i]) {
        return true
      }
    }
    return false
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleSubmit() {
    this.props.getApp()
    this.setState(state => ({
      user: {
        name: state.name,
        email: state.email,
        number: state.number
      }
    }))
  }

  handleNext = () => {
    if (this.state.activeStep === 0) {
      this.handleSubmit()
    }
    if (this.state.activeStep === 3) {
      this.props.addApp({
        name: this.state.name,
        day: this.state.day.slice(0, 10),
        time: this.state.time,
        number: this.state.number
      })
      console.log('confirm', this.state.day.slice(0, 10))
    }

    this.setState(state => ({
      activeStep: state.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  render() {
    const {classes} = this.props
    const steps = getSteps()
    const {activeStep} = this.state
    console.log(this.props.apptmnts)
    console.log(this.state)
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>
                    {getStepContent(
                      index,
                      classes,
                      this.state,
                      this.handleChange,
                      this.handleClose,
                      this.handleOpen,
                      this.isSchedule
                    )}
                  </Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}

Appointement.propTypes = {
  //classes: PropTypes.object
  classes: PropTypes.object.isRequired
}

function mapState(state) {
  return {
    apptmnts: state.appointements.apointmnts.map(app => app.day + app.time)
  }
}
function mapDispatch(dispatch) {
  return {
    addApp: app => dispatch(thunkPost(app)),
    getApp: () => dispatch(thunkAll())
  }
}

export default connect(mapState, mapDispatch)(withStyles(styles)(Appointement))

/*

https://demo.twilio.com/welcome/sms/reply/

(331) 244-6019

PROJECT NAME
kanegethie9@gmail.com's Account
ACCOUNT SID
ACef1f46f578fcfac1f253169e3d40d274
AUTH TOKEN
67dfc75b258060bbc0c68bc4b9db3e4f
Owner
1
2FA Disabled */
