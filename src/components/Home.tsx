
import { Jumbotron,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Jumbotron>
                <h1>Log In </h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
  </p>
                <p>
                <Link to="/login">
                    <Button variant="primary">Log in</Button>
                    </Link>
                </p>
            </Jumbotron>
        </div>
    )
}
