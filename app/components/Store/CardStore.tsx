import { Instrument, useDispatch, cartSlice } from "@/lib/redux";
import { formatCLP } from "@/app/utils/currency";
import { Dispatch, SetStateAction } from "react";
import { Button, Card, Col } from "react-bootstrap";

interface Props {
  instrument: Instrument;
  setIsAddingToCart: Dispatch<SetStateAction<boolean>>;
  setMsgAdded: Dispatch<SetStateAction<string | undefined>>;
}

export const CardStore = ({ instrument, setIsAddingToCart, setMsgAdded }: Props) => {
  const dispatch = useDispatch();

  const handleOnClick = (instrument: Instrument) => {
    setIsAddingToCart(true);
    dispatch(cartSlice.actions.addToCart(instrument));
    setMsgAdded("Se ha agregado " + instrument.name + " al carrito de compras");
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
    setTimeout(() => {
      setMsgAdded(undefined);
    }, 3000);
  };

  return (
    <>
      <Col lg={2} className="mb-2">
        <Card className="rounded-0 shadow-sm h-100 p-3">
          <div className="d-flex flex-column text-center h-100 justify-content-between">
            <div>
              <h5>{instrument.name}</h5>
              <p className="small m-0">Marca: {instrument.brand}</p>
              <p className="small">Categoria: {instrument.category}</p>
            </div>
            <div className="d-flex flex-column">
              <h6>Precio: {formatCLP.format(instrument.price)}</h6>
              <Button
                aria-label="Add to cart"
                variant="flat"
                className=" rounded-0"
                onClick={() => handleOnClick(instrument)}
              >
                Agregar al carrito
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};
