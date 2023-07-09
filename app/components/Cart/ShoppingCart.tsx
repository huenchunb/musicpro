"use client";

import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice, Instrument } from "@/lib/redux";
import { selectCartItems } from "@/lib/redux/slices/cartSlice/selectors";
import { formatCLP } from "@/app/utils/currency";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { selectUser } from "@/lib/redux/slices/sessionSlice/selector";

export const ShoppingCart = () => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleRemoveFromCart = (instrumentId: number) => {
    dispatch(cartSlice.actions.removeFromCart(instrumentId));
  };

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart());
  };

  const calculateTotal = (): number => {
    return cart.reduce((total, instrument) => total + instrument.price * instrument.quantity, 0);
  };

  const calculateQuantityProducts = (): number => {
    return cart.reduce((total, instrument) => total + instrument.quantity, 0);
  };

  return (
    <Container className="my-3 vh-100">
      <Row>
        <Row>
          <Col lg={8}>
            <Card className="p-2">
              <Row>
                {cart.length === 0 ? (
                  <Col lg={12}>
                    <h4 className="m-1">Carrito de compras vacío</h4>
                    <p className="text-muted small m-1">Agrega productos para comprar.</p>
                  </Col>
                ) : (
                  <Col xs={12} md={12} lg={12}>
                    <Row className="justify-content-between align-items-center">
                      <Col>
                        <h4 className="m-1">Este es tu carrito de compras</h4>
                        <p className="text-muted small m-1">
                          Tienes {calculateQuantityProducts()} productos agregados
                        </p>
                      </Col>
                    </Row>
                  </Col>
                )}
                {cart.length > 0 && (
                  <>
                    {cart.map((instrument: Instrument) => (
                      <Col lg={12} key={instrument.id}>
                        <div className="m-1 p-2 card rounded-0 shadow-sm">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="w-100">
                              <div className="mx-2">
                                <p className="m-0">{instrument.name}</p>
                                <div className="d-flex justify-content-between">
                                  <p className="m-0 small text-muted">
                                    Precio: {formatCLP.format(instrument.price)}
                                  </p>
                                  <p className="m-0 small text-muted">Cantidad: {instrument.quantity}</p>
                                </div>
                                <hr className="m-0" />
                              </div>
                              <div className="mx-2">
                                <p className="m-0 d-flex justify-content-end text-uppercase small mt-1">
                                  Subtotal: {formatCLP.format(instrument.price * instrument.quantity)}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex w-50 justify-content-center align-items-center">
                              <Button
                                onClick={() => handleRemoveFromCart(instrument.id)}
                                variant="outline-danger"
                                size="sm"
                                className="btn btn-outline-danger rounded-0 "
                              >
                                Eliminar del carrito
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="p-2">
              <Row>
                <Col>
                  <h5>Resumen</h5>
                  {user && (
                    <div>
                      <div className="d-flex justify-content-between align-items-baseline">
                        <p className="m-0 small">Monto total a pagar</p>
                        <h6 className="m-0 small">{formatCLP.format(calculateTotal())}</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-baseline">
                        <p className="m-0 text-danger small">Tienes un descuento</p>
                        <h6 className="text-danger m-0 small">{formatCLP.format(calculateTotal() * 0.2)}</h6>
                      </div>
                      <hr />
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-baseline">
                    <p className="m-0 small">Monto total a pagar</p>
                    <h6 className="m-0 small">
                      {user ? formatCLP.format(calculateTotal() * 0.8) : formatCLP.format(calculateTotal())}
                    </h6>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-between mt-2">
                <Col>
                  <Button
                    variant="dark"
                    size="sm"
                    className={`rounded-0 w-100 ${cart.length === 0 ? "disabled" : ""}`}
                    onClick={handleClearCart}
                  >
                    Vaciar carrito
                  </Button>
                </Col>
                <Col>
                  <Link
                    href="/checkout"
                    className={`btn btn-flat btn-sm rounded-0 w-100 ${cart.length === 0 ? "disabled" : ""}`}
                  >
                    Comprar
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
