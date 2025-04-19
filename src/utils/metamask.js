// src/utils/metamask.js
import { BrowserProvider, parseUnits } from "ethers";

/**
 * Checks if MetaMask is installed
 * @returns {boolean} Whether MetaMask is installed
 */
export const isMetaMaskInstalled = () => {
  return window.ethereum && window.ethereum.isMetaMask;
};

/**
 * Requests MetaMask connection
 * @returns {Promise<string[]>} Array of account addresses
 */
export const connectMetaMask = async () => {
  if (!isMetaMaskInstalled()) {
    throw new Error("MetaMask is not installed");
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts;
  } catch (error) {
    console.error("Error connecting to MetaMask:", error);
    throw error;
  }
};

/**
 * Gets the current connected accounts
 * @returns {Promise<string[]>} Array of account addresses
 */
export const getConnectedAccounts = async () => {
  if (!isMetaMaskInstalled()) {
    throw new Error("MetaMask is not installed");
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    return accounts;
  } catch (error) {
    console.error("Error getting accounts:", error);
    throw error;
  }
};

/**
 * Convert string to hex format suitable for signing
 * Browser-compatible version that doesn't use Node's Buffer
 * @param {string} message - Message to convert
 * @returns {string} - Hex encoded message with '0x' prefix
 */
export const toHex = (message) => {
  let hex = "0x";
  for (let i = 0; i < message.length; i++) {
    const code = message.charCodeAt(i);
    const hexChar = code.toString(16);
    hex += hexChar;
  }
  return hex;
};

/**
 * Signs a message with MetaMask
 * @param {string} address - The address to sign with
 * @param {object|string} message - The message to sign
 * @returns {Promise<string>} The signature
 */
export const signMessage = async (address, message) => {
  if (!isMetaMaskInstalled()) {
    throw new Error("MetaMask is not installed");
  }

  let msgToSign;

  if (typeof message === "object") {
    // Convert object to string for signing
    msgToSign = JSON.stringify(message);
  } else {
    msgToSign = message;
  }

  try {
    // Use personal_sign method to sign the message
    // Note: MetaMask internally converts UTF-8 strings to hex
    const signature = await window.ethereum.request({
      method: "personal_sign",
      params: [msgToSign, address],
    });

    return signature;
  } catch (error) {
    console.error("Error signing message:", error);
    throw error;
  }
};

/**
 * Signs a transaction with MetaMask (but does NOT send it)
 * @param {object} txData - The transaction data
 * @returns {Promise<string>} The signed transaction
 */
export const signTransaction = async (txData) => {
  if (!isMetaMaskInstalled()) {
    throw new Error("MetaMask is not installed");
  }

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = await signer.getAddress();
  const nonce = await provider.getTransactionCount(address);

  const tx = {
    to: txData.to,
    value: txData.value || 0n,
    gasLimit: txData.gasLimit || 1000000n,
    gasPrice: txData.gasPrice || parseUnits("1", "gwei"),
    nonce,
    data: txData.data || "0x",
    chainId: txData.chainId || (await provider.getNetwork()).chainId,
  };

  try {
    const signedTx = await signer.signTransaction(tx);
    return signedTx;
  } catch (error) {
    console.error("Error signing transaction:", error);
    throw error;
  }
};

/**
 * Fetch data from backend and sign it
 * @param {string} apiUrl - Backend API URL
 * @param {string} address - User's Ethereum address
 * @returns {Promise<{data: object, signature: string}>} - The data and its signature
 */
export const fetchDataAndSign = async (apiUrl, address) => {
  try {
    // Fetch data from backend
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Sign the data
    const signature = await signMessage(address, data);

    return { data, signature };
  } catch (error) {
    console.error("Error fetching and signing data:", error);
    throw error;
  }
};

/**
 * Send signed data to API
 * @param {string} apiUrl - API endpoint to send the signed data to
 * @param {object} data - The original data that was signed
 * @param {string} signature - The signature of the data
 * @param {string} address - The address that signed the data
 * @returns {Promise<object>} - API response
 */
export const sendSignedData = async (apiUrl, data, signature, address) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        signature,
        address,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending signed data:", error);
    throw error;
  }
};

/**
 * Setup MetaMask event listeners
 * @param {function} onAccountsChanged - Callback when accounts change
 * @param {function} onChainChanged - Callback when chain changes
 * @param {function} onDisconnect - Callback when MetaMask disconnects
 */
export const setupMetaMaskListeners = (
  onAccountsChanged,
  onChainChanged,
  onDisconnect
) => {
  if (!isMetaMaskInstalled()) {
    return;
  }

  if (onAccountsChanged) {
    window.ethereum.on("accountsChanged", onAccountsChanged);
  }

  if (onChainChanged) {
    window.ethereum.on("chainChanged", onChainChanged);
  }

  if (onDisconnect) {
    window.ethereum.on("disconnect", onDisconnect);
  }

  return () => {
    // Cleanup function to remove listeners
    if (onAccountsChanged) {
      window.ethereum.removeListener("accountsChanged", onAccountsChanged);
    }

    if (onChainChanged) {
      window.ethereum.removeListener("chainChanged", onChainChanged);
    }

    if (onDisconnect) {
      window.ethereum.removeListener("disconnect", onDisconnect);
    }
  };
};
