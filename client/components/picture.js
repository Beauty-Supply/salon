import React from 'react'

import axios from 'axios'

import {Link} from 'react-router-dom'
import {Container, Card, Image, Grid, Segment} from 'semantic-ui-react'

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

  render() {
    console.log('IMG', this.state.picture)

    return (
      // <Container>
      //   <Grid>
      //     <Grid.Row>
      //       <Card.Group itemsPerRow={4}>
      //         {this.state.picture.map(pic => (
      //           <Card key={pic.id}>
      //             <Image src={pic.imageUrl} />

      //             <Card.Content>
      //               <Card.Header>{pic.name}</Card.Header>
      //             </Card.Content>
      //           </Card>
      //         ))}
      //       </Card.Group>
      //     </Grid.Row>
      //   </Grid>
      // </Container>

      <Container>
        <Grid>
          <Container fluid>
            <Segment>
              <Grid.Row>
                <Grid.Column width={2} />

                <Grid.Column width={12}>
                  <Image.Group size="medium">
                    {this.state.picture.map(pic => (
                      // {images &&
                      //   images.map((image) => (
                      <Image key={pic.id} src={pic.imageUrl} bordered />
                    ))}
                    {/* <Divider hidden /> */}
                  </Image.Group>
                </Grid.Column>
                <Grid.Column width={2} />
              </Grid.Row>
            </Segment>
          </Container>
        </Grid>
      </Container>
    )
  }
}
