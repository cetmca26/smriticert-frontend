// src/utils/apiSignSubmit.js
import { signMessage } from "./metamask";

/**
 * Handles the prepare-sign-submit pattern for API calls
 *
 * @param {string} basePath - Base API path (e.g., "/api/register")
 * @param {object} data - Data to send to the prepare endpoint
 * @param {string} method - HTTP method to use for the prepare call ("GET", "POST", etc.)
 * @param {string} address - Ethereum address to sign with
 * @param {function} showError - Function to display error messages
 * @returns {Promise<object>} - The final API response
 */
export const prepareSignSubmit = async (
  basePath,
  data,
  method = "POST",
  address,
  showError
) => {
  if (!address) {
    const error = new Error(
      "No wallet address available. Please connect your wallet first."
    );
    if (showError) showError(error.message);
    throw error;
  }

  // Normalize the base path to ensure it doesn't have trailing slash
  const normalizedPath = basePath.endsWith("/")
    ? basePath.slice(0, -1)
    : basePath;

  // Prepare the API URLs
  const prepareUrl = `${normalizedPath}/prepare`;
  const submitUrl = `${normalizedPath}/submit`;

  try {
    // Step 1: Call the prepare endpoint
    let prepareResponse;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Add body if needed (for POST, PUT, PATCH)
    if (method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(data);
    }

    prepareResponse = await fetch(prepareUrl, options);

    if (!prepareResponse.ok) {
      let errorMessage;
      try {
        // Try to parse error message from response
        const errorData = await prepareResponse.json();
        errorMessage =
          errorData.message ||
          errorData.error ||
          `API error (${prepareResponse.status})`;
      } catch (e) {
        errorMessage = `API error (${prepareResponse.status})`;
      }

      throw new Error(`Prepare request failed: ${errorMessage}`);
    }

    // Step 2: Get the response data to sign
    const prepareData = await prepareResponse.json();

    // Step 3: Sign the data
    const signature = await signMessage(address, prepareData);

    // Step 4: Send the signed data to submit endpoint
    const submitResponse = await fetch(submitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: prepareData,
        signature,
        address,
      }),
    });

    if (!submitResponse.ok) {
      let errorMessage;
      try {
        // Try to parse error message from response
        const errorData = await submitResponse.json();
        errorMessage =
          errorData.message ||
          errorData.error ||
          `API error (${submitResponse.status})`;
      } catch (e) {
        errorMessage = `API error (${submitResponse.status})`;
      }

      throw new Error(`Submit request failed: ${errorMessage}`);
    }

    // Step 5: Return the final response
    return await submitResponse.json();
  } catch (error) {
    console.error("API sign and submit error:", error);

    // Show error popup if function provided
    if (showError) {
      showError(error.message || "An unexpected error occurred");
    }

    throw error;
  }
};

// Optional: Simple toast/popup for errors
export const showErrorPopup = (message) => {
  // Create popup element
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "20px";
  popup.style.backgroundColor = "#f44336";
  popup.style.color = "white";
  popup.style.padding = "15px";
  popup.style.borderRadius = "5px";
  popup.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  popup.style.zIndex = "10000";
  popup.style.maxWidth = "80%";
  popup.textContent = message;

  // Add close button
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.style.marginLeft = "10px";
  closeBtn.style.float = "right";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontWeight = "bold";
  closeBtn.onclick = () => document.body.removeChild(popup);
  popup.prepend(closeBtn);

  // Add to document
  document.body.appendChild(popup);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(popup)) {
      document.body.removeChild(popup);
    }
  }, 5000);
};
