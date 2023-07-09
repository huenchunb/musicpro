import {Row, Spinner} from "react-bootstrap";

export const Loading = () => {
    return (
        <Row className="justify-content-center my-2">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Row>
    )
}