import React from 'react'
import {RadioGroup} from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

class TimeSelector extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <Select
          floatingLabelText="AM or PM"
          value={data.appointmentMeridiem}
          onChange={(evt, key, payload) =>
            this.handleSetAppointmentMeridiem(payload)
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
          defaultSelected={data.appointmentSlot}
          onChange={(evt, val) => this.handleSetAppointmentSlot(val)}
        >
          {this.renderAppointmentTimes()}
        </RadioGroup>
      </div>
    )
  }
}

export default TimeSelector
