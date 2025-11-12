# Using Bithumb API (v1)

The default setting is for "market buy" 3.5 USDT (≈5,200₩) with KRW

1. (Required) Rename `key.json.example` to `key.json`

```bash
~$ mv key.json.example key.json
```

2. (Required) Fill in your `API Key` to `key.json`

> The API Key requires permission for "매수주문". If the "매수주문" option is not found, check if you are gernerating **API key for V1.0**

--- Optional --- 

3. Check the endpoint you want to call (index.js:31)

4. Check the symbol you want to buy (index.js:34)

5. Check the market "KRW" or "BTC" (index.js:37)

6. Check the amount you want to buy (index.js:40)