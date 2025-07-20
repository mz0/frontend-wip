import { useState, useEffect } from "react";

// Use multiple Effects to Separate Concerns
function MenuPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Little Lemon';
  }, []);

  useEffect(() => {
    document.title = `Little Lemon, v${version}`;
  }, [version]); // Only re-run the effect if version changes


  useEffect(() => {
    fetch(`https://littlelemon/menu/${id}`)
      .then(response => response.json())
      .then(json => setData(json));
  }, [props.id]);

  // ...
}

// Cleanup (in return)
function LittleLemonChat(props) {
  const [status, chatStatus] = useState('offline');

  useEffect(() => {
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'))

    return () => {
      setStatus('offline');
      LemonChat.unsubscribeFromMessages(props.chatId);
    };
  }, []);

  // ...
}

export function App1() {
  const [btcData, setBtcData] = useState({});
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1>Current BTC/USD data</h1>
      <p>Code: {btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </>
  );
}

export function App2() {
  const [btcData, setBtcData] = useState({});

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []); // [] - run only once, after the initial render

  return (
    <>
      <h1>Current BTC/USD data</h1>
      {Object.keys(btcData).length > 0 && (
        <>
        <p>Code: {btcData.code}</p>
        <p>Symbol: {btcData.symbol}</p>
        <p>Rate: {btcData.rate}</p>
        <p>Description: {btcData.description}</p>
        <p>Rate Float: {btcData.rate_float}</p>
        </>
      )}
    </>
  );
}
