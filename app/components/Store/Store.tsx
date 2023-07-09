"use client";

import { Instrument, useSelector } from "@/lib/redux";
import { selectCartInstruments } from "@/lib/redux/slices/cartSlice/selectors";
import { useState } from "react";
import { Loading } from "@/app/components/Loading/Loading";
import { CardStore } from "@/app/components/Store/CardStore";
import { Alert, Col, Container, Row } from "react-bootstrap";

export const Store = () => {
  const instruments = useSelector(selectCartInstruments);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [msgAdded, setMsgAdded] = useState<string | undefined>(undefined);

  return (
    <Container>
      <Row className="justify-content-center p-2">
        {isAddingToCart && (
          <Col>
            <Loading />
          </Col>
        )}
        {!isAddingToCart && msgAdded && (
          <Col>
            <Alert variant="success" className="m-0">
              <p className="m-0 small">{msgAdded}</p>
            </Alert>
          </Col>
        )}
      </Row>
      <Row className="justify-content-center">
        {instruments.map((instrument: Instrument) => (
          <CardStore
            key={instrument.id}
            instrument={instrument}
            setIsAddingToCart={setIsAddingToCart}
            setMsgAdded={setMsgAdded}
          />
        ))}
      </Row>
    </Container>
  );
};
