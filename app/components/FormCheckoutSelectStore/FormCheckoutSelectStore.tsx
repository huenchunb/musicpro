import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectStores } from "@/lib/redux/slices/storeSlice/selector";
import { createTransaction } from "@/lib/api/transbank/transbank";
import { selectCartItems } from "@/lib/redux/slices/cartSlice/selectors";

type InputFormCheckoutSelectStore = {
  storeId: number;
};

export const FormCheckoutSelectStore = () => {
  const stores = useSelector(selectStores);
  const cart = useSelector(selectCartItems);

  const form = useForm<InputFormCheckoutSelectStore>();

  const { register, handleSubmit } = form;

  const onSubmit = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    createTransaction(total).then((response: any) => {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = response.data.url;
      document.body.appendChild(form);
      const tokenField = document.createElement("input");
      tokenField.type = "hidden";
      tokenField.name = "token_ws";
      tokenField.value = response.data.token;
      form.appendChild(tokenField);
      form.submit();
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-10 m-1 p-4 card rounded-0 shadow-sm">
        <h4>Retiro en tienda</h4>
        <p className="lead">Selecciona una tienda donde deseas retirar el producto</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select {...register("storeId", { required: true })} className="form-control">
            {stores.map((store) => (
              <option key={store.id} value={store.id}>
                {store.address}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-dark mt-4">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};
