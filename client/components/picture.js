import React from 'react'

import axios from 'axios'

import {Link} from 'react-router-dom'
import {Container, Card, Image, Grid, Button, Icon} from 'semantic-ui-react'

export default class Picture extends React.Component {
  constructor() {
    super()
    this.state = {
      picture: []
    }
  }
  async componentDidMount() {
    const res = await axios.get(`/api/picture`)
    const pictures = res.data.pictures

    this.setState({picture: pictures})
    console.log('pic', pictures)
  }
  /*async componentDidUpdate(prevProps) {
    const latest = this.props.match.params.pictureId
    const prev = prevProps.match.params.pictureId
    if (latest !== prev) {
      const {data} = await axios.get(`/pictures/${latest}`)
      this.setState({picture: data})
    }
  }*/
  render() {
    //const pictureId = Number(this.props.match.params.pictureId)

    //const {imageUrl, name, faves} = this.state.picture

    console.log('IMG', this.state.picture)

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Card.Group itemsPerRow={6}>
              {this.state.picture.map(pic => (
                <Card key={pic.id}>
                  <Image src={pic.imageUrl} />

                  <Card.Content>
                    <Card.Header>{pic.name}</Card.Header>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}
