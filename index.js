const crypto = require("crypto-js");

const { connectKey: accessKey, secretKey } = require("./key.json");

function getOptions(bo) {
  const query = new URLSearchParams(bo).toString();

  const timestamp = Date.now();

  const comb = `${bo.endpoint};${query};${timestamp}`;

  const hash = crypto.HmacSHA512(comb, secretKey).toString();
  const base64Encoded = btoa(hash);

  const options = {
    method: "POST",
    headers: {
      "api-client-type": "2",
      "Api-Sign": base64Encoded,
      "Api-Nonce": timestamp,
      "Api-Key": accessKey,
    },
  };

  return options;
}

async function main() {
  const host = `https://api.bithumb.com`;

  const ep = `/trade/market_buy`;

  // Buying Token Symbol
  const buyingTokenSymbol = "USDT";

  // Market : "KRW" or "BTC"
  const market = "KRW";

  // Token amount that you want to buy
  const buyingAmount = 3.5;

  const body = {
    endpoint: ep,
    units: buyingAmount,
    order_currency: buyingTokenSymbol,
    payment_currency: market,
  };

  const fetchOption = getOptions(body);

  fetchOption.body = new URLSearchParams(body);

  const request = await fetch(`${host}${ep}`, fetchOption);

  const result = await request.json();
  console.log(result);
}

main();
