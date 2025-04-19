// src/hooks/useMetaMask.js

import { useState, useEffect, useCallback } from "react";
import {
  isMetaMaskInstalled,
  connectMetaMask,
  getConnectedAccounts,
  signMessage,
  fetchDataAndSign,
  sendSignedData,
  setupMetaMaskListeners,
  signTransaction,
} from "../utils/metamask";

const useMetaMask = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  const [chainId, setChainId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if MetaMask is installed on mount
  useEffect(() => {
    const checkMetaMask = async () => {
      const installed = isMetaMaskInstalled();
      setIsInstalled(installed);

      if (installed) {
        try {
          const accounts = await getConnectedAccounts();
          if (accounts.length > 0) {
            setAccounts(accounts);
            setCurrentAccount(accounts[0]);
            setIsConnected(true);
          }
          const chainId = await window.ethereum.request({
            method: "eth_chainId",
          });
          setChainId(chainId);
        } catch (err) {
          console.error("Error checking MetaMask status:", err);
          setError(err.message);
        }
      }
    };

    checkMetaMask();
  }, []);

  // Setup event listeners
  useEffect(() => {
    if (!isInstalled) return;

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setIsConnected(false);
        setCurrentAccount("");
      } else {
        setAccounts(accounts);
        setCurrentAccount(accounts[0]);
        setIsConnected(true);
      }
    };

    const handleChainChanged = (chainId) => {
      setChainId(chainId);
      // Recommended to reload the page on chain change
      // window.location.reload();
    };

    const handleDisconnect = () => {
      setIsConnected(false);
      setCurrentAccount("");
      setAccounts([]);
    };

    const cleanup = setupMetaMaskListeners(
      handleAccountsChanged,
      handleChainChanged,
      handleDisconnect
    );

    return cleanup;
  }, [isInstalled]);

  // Connect to MetaMask
  const connect = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const accounts = await connectMetaMask();
      setAccounts(accounts);
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
      return accounts[0];
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Sign a message
  const sign = useCallback(
    async (message) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!currentAccount) {
          throw new Error("No account connected");
        }

        const signature = await signMessage(currentAccount, message);
        return signature;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentAccount]
  );

  const signTx = useCallback(
    async (tx) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!currentAccount) {
          throw new Error("No account connected");
        }

        const signature = await signTransaction(tx);
        return signature;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentAccount]
  );

  // Fetch data from API and sign it
  const fetchAndSign = useCallback(
    async (apiUrl) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!currentAccount) {
          throw new Error("No account connected");
        }

        const result = await fetchDataAndSign(apiUrl, currentAccount);
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentAccount]
  );

  // Send signed data to API
  const sendSigned = useCallback(
    async (apiUrl, data, signature) => {
      setIsLoading(true);
      setError(null);

      try {
        if (!currentAccount) {
          throw new Error("No account connected");
        }

        const result = await sendSignedData(
          apiUrl,
          data,
          signature,
          currentAccount
        );
        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [currentAccount]
  );

  return {
    isInstalled,
    isConnected,
    isLoading,
    error,
    accounts,
    currentAccount,
    chainId,
    connect,
    sign,
    fetchAndSign,
    sendSigned,
    signTx,
  };
};

export default useMetaMask;
