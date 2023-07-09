import { Instrument } from "../..";

export const fetchInstruments = async (): Promise<{ data: Instrument[] }> => {
  const response = await fetch("http://localhost:3000/api/instruments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};
