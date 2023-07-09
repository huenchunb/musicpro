"use client";

import Link from "next/link";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

export default function SuccessPaymentPage() {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Card bg="light" className="shadow-sm">
            <Card.Header as="h5">Orden procesada con éxito</Card.Header>
            <Card.Body>
              <Alert variant="success">
                <Card.Text>El pago ha sido procesado con éxito</Card.Text>
              </Alert>
              <div className="d-flex justify-content-end">
                <Link href="/" className="btn btn-flat">
                  Seguir comprando
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
