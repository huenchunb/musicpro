"use client";

import Link from "next/link";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

export default function ErrorPaymentPage() {
  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col lg={9}>
          <Card bg="light" className="shadow-sm">
            <Card.Header as="h5">Orden no procesada</Card.Header>
            <Card.Body>
              <Alert variant="danger">
                <Card.Text>
                  Ocurrió un error en el pago o el pago ha sido cancelado. Intente comprar nuevamente.
                </Card.Text>
              </Alert>
              <div className="d-flex justify-content-end">
                <Link href="/" className="btn btn-flat">
                  Comprar
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
