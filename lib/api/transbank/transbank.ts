const axios = require("axios");

export const createTransaction = async (amount: number) => {
  //const url: string = "https://musicprotransbank.azurewebsites.net/api/Transbank/CreateTransaction";
  const url: string = "https://localhost:7093/api/Transbank/CreateTransaction";
  const data = {
    buyOrder: "orderBuy12345678",
    sessionId: "sesion1234557545",
    amount,
    //returnUrl: "https://musicprotransbank.azurewebsites.net/api/Transbank/ConfirmTransaction",
    returnUrl: "https://localhost:7093/api/Transbank/ConfirmTransaction",
  };

  var response = axios.post(url, data);

  return response;
};
