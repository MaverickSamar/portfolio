import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Wallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  // This method handles connecting to the wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('No crypto wallet found. Please install it.');
        return;
      }
      
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      // We just take the first account returned for simplicity
      setAccount(accounts[0]);

      // Create an ethers provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      // Retrieve the balance of the connected account
      const balanceWei = await provider.getBalance(accounts[0]);
      
      // Convert the balance from Wei to Ether and set it
      setBalance(ethers.utils.formatEther(balanceWei));
    } catch (error) {
      console.error(error);
    }
  };

  // Optional: If you want to update the account & balance on account change
  useEffect(() => {
    if (window.ethereum) {
      // Event: account changed
      window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length) {
          setAccount(accounts[0]);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const balanceWei = await provider.getBalance(accounts[0]);
          setBalance(ethers.utils.formatEther(balanceWei));
        } else {
          setAccount(null);
          setBalance(null);
        }
      });

      // Event: chain changed (e.g. switching from Mainnet to Rinkeby)
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {account ? (
        <>
          <div style={{ marginRight: '1rem' }}>
            <strong>Address:</strong> {account.slice(0, 9)}...
          </div>
          <div>
            <strong>Balance:</strong> {balance} ETH
          </div>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default Wallet;
