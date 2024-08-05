import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(null);
  const [contractData, setContractData] = useState('');

  useEffect(() => {
    // Initialize Web3 and load account
    const loadWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        
        try {
          // Request account access
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          // Fetch balance
          const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
          setBalance(web3Instance.utils.fromWei(balanceWei, 'ether'));

          // Example contract interaction
          const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
          const contractABI = []; // Replace with your contract ABI
          const contract = new web3Instance.eth.Contract(contractABI, contractAddress);
          
          // Fetch data from contract
          const data = await contract.methods.someMethod().call();
          setContractData(data);
          
        } catch (error) {
          console.error('Error connecting to Web3:', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    loadWeb3();
  }, []);

  return (
    <div>
      <h1>Web3 Dynamic Page</h1>
      <p><strong>Account:</strong> {account}</p>
      <p><strong>Balance:</strong> {balance} ETH</p>
      <p><strong>Contract Data:</strong> {contractData}</p>
    </div>
  );
}

export default App;
