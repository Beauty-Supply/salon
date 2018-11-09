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
    'Confirm'
  ]
}

function getStepContent(
  step,
  classes,
  state,
  handleChange,
  handleSetAppointmentMeridiem,
  handleSetAppointmentSlot,
  renderAppointmentTimes
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
        <DateSelector />
      ) /*'An ad group contains one or more ads which target a shared set of keywords.'*/
    case 2:
      return (
        <div>
          <Select
            floatingLabelText="AM or PM"
            onChange={(evt, key, payload) =>
              handleSetAppointmentMeridiem(payload)
            }
            selectionRenderer={value => (value ? 'PM' : 'AM')}
          >
            <MenuItem value={0}>AM</MenuItem>
            <MenuItem value={1}>PM</MenuItem>
          </Select>
          <RadioGroup
            style={{
              marginTop: 15,
              marginLeft: 15
            }}
            name="appointmentTimes"
            onChange={(evt, val) => handleSetAppointmentSlot(val)}
          >
            {renderAppointmentTimes()}
          </RadioGroup>
        </div>
      )
    /*`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`*/
    default:
      return 'Unknown step'
  }
}

class Appointement extends React.Component {
  state = {
    activeStep: 0,
    name: '',
    email: '',
    number: '',
    user: {},
    appointmentDate: Date,
    appointmentMeridiem: 0
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit() {
    this.setState(state => ({
      user: {
        name: state.name,
        email: state.email,
        number: state.number
      }
    }))
  }

  handleSetAppointmentDate(date) {
    this.handleNext()
    this.setState({appointmentDate: date, confirmationTextVisible: true})
  }
  handleSetAppointmentSlot(slot) {
    this.handleNext()
    this.setState({appointmentSlot: slot})
  }
  handleSetAppointmentMeridiem(meridiem) {
    this.setState({appointmentMeridiem: meridiem})
  }

  renderAppointmentTimes() {
    if (!this.state.loading) {
      const slots = [...Array(8).keys()]
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format(
          'YYYY-DD-MM'
        )
        const t1 = moment()
          .hour(9)
          .minute(0)
          .add(slot, 'hours')
        const t2 = moment()
          .hour(9)
          .minute(0)
          .add(slot + 1, 'hours')
        const scheduleDisabled = this.state.schedule[appointmentDateString]
          ? this.state.schedule[
              moment(this.state.appointmentDate).format('YYYY-DD-MM')
            ][slot]
          : false
        const meridiemDisabled = this.state.appointmentMeridiem
          ? t1.format('a') === 'am'
          : t1.format('a') === 'pm'
        return (
          <RadioGroup
            label={t1.format('h:mm a') + ' - ' + t2.format('h:mm a')}
            key={slot}
            value={slot}
            style={{
              marginBottom: 15,
              display: meridiemDisabled ? 'none' : 'inherit'
            }}
            disabled={scheduleDisabled || meridiemDisabled}
          />
        )
      })
    } else {
      return null
    }
  }

  handleNext = () => {
    if (this.state.activeStep === 0) {
      this.handleSubmit()
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
                      this.handleSetAppointmentMeridiem,
                      this.handleSetAppointmentSlot,
                      this.renderAppointmentTimes
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

export default withStyles(styles)(Appointement)
