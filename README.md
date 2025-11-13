# Bithumb API (v1) 사용하기

> 이 레포는 '[빗썸의 API키 사용하기 이벤트](https://feed.bithumb.com/notice/1650330)' 를 위해 작성되었습니다.
> 
> 커피 한잔 사주신다면 감사히 받겠습니다☕️ 사랑합니다 🥰
>
> `0xcefeb19319e7b14c4eee63ea697f10334436ea74 `

기본적으로 **3.5USDT** (약 5200원) 을 **KRW** 로 **시장가 구매**하도록 설정되어있습니다.

1. (필수) `key.json.example` 파일을 `key.json` 로 이름을 바꿔주세요

```bash
~$ mv key.json.example key.json
```

2. (필수) 빗썸에서 발급받은 api key 를 `key.json` 파일 안에 각각 입력해 주세요

> API키를 발급할 때 **"매수주문" 권한**을 꼭 설정하셔야 합니다. 만약 "매수주문" 옵션이 보이지 않는다면 **V1 api key** 를 발급받고 계신건지 확인 하세요!

선택사항

```
Option 1. Check the endpoint you want to call (index.js:31)

Option 2. Check the symbol you want to buy (index.js:34)

Option 3. Check the market "KRW" or "BTC" (index.js:37)

Option 4. Check the amount you want to buy (index.js:40)
```

3. npm 패키지 설치

```bash
~$ npm i
```

4. 스크립트 실행

```bash
~$ node index.js
```


---

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
