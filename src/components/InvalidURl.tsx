import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from '@material-ui/core/Container';


export default function InvalidURl() {
    return (
        <Jumbotron fluid>
        <Container>
          <h1>404!</h1>
          <p>
            Invalid Url
          </p>
        </Container>
      </Jumbotron>
    )
}
