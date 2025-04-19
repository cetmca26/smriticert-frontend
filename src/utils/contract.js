// src/utils/contract.js
import { BrowserProvider, Contract } from "ethers";
import SmritiCertABI from "../contracts/SmritiCert.json";

// Network configuration
const NETWORK_CONFIG = {
  chainId: "0x539", // Hex of 1337
  chainName: "Hardhat Local",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: ["http://127.0.0.1:8545"],
  blockExplorerUrls: []
};

// Contract address - replace with your actual deployed contract address
const CONTRACT_ADDRESS = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"; // Replace with actual address

/**
 * Switch to the required network
 * @returns {Promise<boolean>} Success status
 */
export const switchToRequiredNetwork = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  try {
    // Try to switch to the network
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: NETWORK_CONFIG.chainId }],
    });
    return true;
  } catch (error) {
    // If the network doesn't exist in MetaMask, add it
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [NETWORK_CONFIG],
        });
        return true;
      } catch (addError) {
        console.error("Error adding network:", addError);
        throw addError;
      }
    } else {
      console.error("Error switching network:", error);
      throw error;
    }
  }
};

/**
 * Get contract instance with connected signer
 * @returns {Promise<Contract>} Contract instance with signer
 */
export const getContractWithSigner = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed");
  }

  try {
    // Ensure we're on the correct network
    await switchToRequiredNetwork();
    
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new Contract(CONTRACT_ADDRESS, SmritiCertABI.abi, signer);
  } catch (error) {
    console.error("Error getting contract instance:", error);
    throw error;
  }
};

/**
 * Register an institution on the blockchain
 * @param {string} name - Institution name
 * @param {string} code - Institution code
 * @param {string} logoUrl - Institution logo URL
 * @returns {Promise<object>} Transaction receipt
 */
export const registerInstitution = async (name, code, logoUrl) => {
  try {
    const contract = await getContractWithSigner();
    
    // Call the contract function
    const tx = await contract.registerInstitution(name, code, logoUrl);
    
    // Wait for transaction to be mined
    const receipt = await tx.wait();
    
    // Parse the event data to get the institution ID
    const event = receipt.logs
      .map(log => {
        try {
          return contract.interface.parseLog(log);
        } catch (e) {
          return null;
        }
      })
      .find(event => event && event.name === "InstitutionRegistered");
    
    const institutionId = event ? event.args[0] : null;
    
    return {
      success: true,
      institutionId,
      transactionHash: receipt.hash,
      receipt
    };
  } catch (error) {
    console.error("Error registering institution:", error);
    throw error;
  }
};
