"use client";

import { useForm } from "react-hook-form";
import { FormCheckoutSelectStore } from "../FormCheckoutSelectStore/FormCheckoutSelectStore";
import { FormCheckoutDelivery } from "../FormCheckoutDelivery/FormCheckoutDelivery";

type InputFormCheckOut = {
  despacho: number;
};

export const Checkout = () => {
  const form = useForm<InputFormCheckOut>();

  const { watch, register } = form;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 m-1 p-4 card rounded-0 shadow-sm">
          <h2>Checkout</h2>
          <h5>Selecciona tu método de despacho</h5>
          <div className="form-group">
            <select {...register("despacho", { required: true })} className="form-control">
              <option value="0">Seleccione</option>
              <option value="1">Retiro en tienda</option>
              <option value="2">Despacho a domicilio</option>
            </select>
          </div>
        </div>
      </div>
      {Number(watch("despacho")) === 1 && <FormCheckoutSelectStore />}
      {Number(watch("despacho")) === 2 && <FormCheckoutDelivery />}
    </div>
  );
};
