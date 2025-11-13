# Using Bithumb API (v1)

> This repo is made to participate in '[Using Bithumb API Key Event](https://feed.bithumb.com/notice/1650330)'
> 
> You can buy me a coffee ☕️ :)
>
> `0xcefeb19319e7b14c4eee63ea697f10334436ea74 `

The default setting is for "market buy" 3.5 USDT (≈5,200₩) with KRW

1. (Required) Rename `key.json.example` to `key.json`

```bash
~$ mv key.json.example key.json
```

2. (Required) Fill in your `API Key` to `key.json`

> The API Key requires permission for "매수주문". If the "매수주문" option is not found, check if you are gernerating **API key for V1.0**

Options!

```
Option 1. Check the endpoint you want to call (index.js:31)

Option 2. Check the symbol you want to buy (index.js:34)

Option 3. Check the market "KRW" or "BTC" (index.js:37)

Option 4. Check the amount you want to buy (index.js:40)
```

3. install npm package

```bash
~$ npm i
```

4. run the script

```bash
~$ node index.js
```
