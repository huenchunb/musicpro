/* Core */
import { Instrument } from "@/lib/redux";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const instruments: Instrument[] = [
    {
      id: 1,
      brand: "Evans",
      category: "Bateria",
      name: "Parche Bateria Evans",
      price: 15990,
      quantity: 100,
    },
    {
      id: 2,
      brand: "Squier",
      category: "Guitarra",
      name: "Guitarra eléctrica Squier Bullet Telecaster",
      price: 199990,
      quantity: 100,
    },
    {
      id: 3,
      brand: "Squier",
      category: "Guitarra",
      name: "Guitarra eléctrica Squier Bullet Mustang",
      price: 199990,
      quantity: 100,
    },
  ];
  await new Promise((r) => setTimeout(r, 500));
  return NextResponse.json({ data: instruments });
}
