/* Components */
import { Slider } from "./components/Slider/Slider";
import { Store } from "./components/Store/Store";

export default function IndexPage() {
  return (
    <>
      <Slider />
      <Store />
    </>
  );
}

export const metadata = {
  title: "MUSICPRO - Tienda en línea de instrumentos electrónicos",
};
