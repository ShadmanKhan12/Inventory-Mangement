
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Jumbotron>
                <h1>Log In </h1>
                <p>Medical Inventory Management Web Application</p>
                <p>
                    <Link to="/login">
                        <Button variant="primary">Log in</Button>
                    </Link>
                </p>
            </Jumbotron>
        </div>
    )
}
