document.getElementById('search').addEventListener('click',getData);

  
async function getData() {
    const bruh = document.getElementById("bruh").value;
const url = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${bruh}/nonces`;
 const response = await fetch(url);
 if (!response.ok) {
    const message = alert(`Invalid STX Ady: ${response.status}`);
    throw new Error(message);
  }
  const data = await response.json();
 
  document.getElementById('detected_missing_nonces').innerHTML=data.detected_missing_nonces;
  document.getElementById('last_executed_tx_nonce').innerHTML=data.last_executed_tx_nonce;
  document.getElementById('last_mempool_tx_nonce').innerHTML=data.last_mempool_tx_nonce;
  document.getElementById('possible_next_nonce').innerHTML=data.possible_next_nonce;
 
 }



 

