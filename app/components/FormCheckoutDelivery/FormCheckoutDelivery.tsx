import { useForm } from "react-hook-form";

type InputFormCheckoutDelivery = {
  address: string;
  comune: string;
  city: string;
  region: string;
  email: string;
  phone: number;
};

export const FormCheckoutDelivery = () => {
  const form = useForm<InputFormCheckoutDelivery>();

  const { register, watch } = form;

  console.log(watch());

  return (
    <div className="row justify-content-center">
      <div className="col-10 m-1 p-4 card rounded-0 shadow-sm">
        <h4>Despacho a domicilio</h4>
        <p className="lead">Ingresa los datos de envío donde quieres recibir el despacho</p>
        <div className="card p-2 shadow-sm">
          <div className="form-group">
            <input
              className="form-control my-2"
              type="address"
              placeholder="Ingrese dirección donde quiere recibir el despacho"
              {...register("address", { required: true, maxLength: 50, minLength: 4 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Ingrese comuna"
              {...register("comune", { required: true, maxLength: 50, minLength: 4 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Ingrese ciudad"
              {...register("city", { required: true, maxLength: 50, minLength: 4 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="text"
              placeholder="Ingrese región"
              {...register("region", { required: true, maxLength: 50, minLength: 2 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="email"
              placeholder="Ingresa correo electrónico"
              {...register("email", { required: true, maxLength: 50, minLength: 4 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control my-2"
              type="number"
              placeholder="Ingrese un número de contacto"
              {...register("phone", { required: true, min: 9999999999 })}
            />
          </div>
        </div>
        <button className="btn btn-dark mt-4">Comprar</button>
      </div>
    </div>
  );
};
