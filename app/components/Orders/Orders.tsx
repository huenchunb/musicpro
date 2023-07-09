import { formatCLP } from "@/app/utils/currency";
import { selectCartOrders } from "@/lib/redux/slices/sessionSlice/selector";
import { sessionSlice } from "@/lib/redux/slices/sessionSlice/userSlice";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectCartOrders);

  const handleOnClickAproved = (id: number) => {
    dispatch(sessionSlice.actions.changeStatusById({ id, status: true }));
  };

  const handleOnClickInProcess = (id: number) => {
    dispatch(sessionSlice.actions.changeStatusById({ id, status: false }));
  };

  return (
    <Container>
      <Row>
        <Col>
          {orders.length > 0 && (
            <>
              {orders.map((order) => (
                <Card key={order.id} className="my-1 shadow-sm">
                  <Card.Header>Pedido {order.id}</Card.Header>
                  <Card.Body>
                    <Container>
                      <Row>
                        <Col>
                          <p className="m-0">
                            Total:{" "}
                            {formatCLP.format(
                              order.instruments.reduce((total, instrument) => total + instrument.price, 0)
                            )}
                          </p>
                          <p className="text-muted m-0">{order.address}</p>
                          <p>Estado: {order.status ? "Aprobado" : "Desaprobado"}</p>
                        </Col>
                        <Col>
                          <h6>Productos del pedido</h6>
                          {order.instruments.map((instrument) => (
                            <Card>
                              <Card.Header>{instrument.name}</Card.Header>
                            </Card>
                          ))}
                        </Col>
                      </Row>
                      <Row className="mt-3">
                        {order.status ? (
                          <Button variant="flat" onClick={() => handleOnClickInProcess(order.id)}>
                            Desaprobar pedido
                          </Button>
                        ) : (
                          <Button variant="flat" onClick={() => handleOnClickAproved(order.id)}>
                            Aprobar pedido
                          </Button>
                        )}
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              ))}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
