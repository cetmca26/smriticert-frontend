import React from 'react';

function TechnologyOverview() {
  return (
    <div id="technology-overview">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Project Architecture
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Explore the technology stack and decentralized workflow behind our certificate issuance system built on Ethereum and Polygon.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Blockchain Layer */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Blockchain Layers
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                <strong>Ethereum (Layer 1)</strong> handles smart contracts for verification and issuance.<br/>
                <strong>Polygon (Layer 2)</strong> processes bulk certificate minting with minimal gas fees.
              </p>
            </div>
          </div>

          {/* Smart Contracts */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Smart Contracts
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Written in Solidity, smart contracts automate institution approval, course management, and certificate issuance with multi-signature security.
              </p>
            </div>
          </div>

          {/* Frontend */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Frontend
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Built with React.js and Web3.js for seamless interaction with the blockchain. MetaMask integration allows users to connect their wallets.
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Backend & Storage
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Node.js with Express handles APIs. MongoDB stores off-chain data. IPFS securely hosts metadata linked to NFT certificates.
              </p>
            </div>
          </div>

          {/* Workflow */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Decentralized Workflow
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                From institution approval to certificate verification, every action is recorded immutably. Multi-signature voting ensures trust and transparency.
              </p>
            </div>
          </div>

          {/* Cost Optimization */}
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 shadow-2xl shadow-gray-600/10">
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Cost Efficiency
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Batch minting via Polygon minimizes gas fees. Institutions fund transactions, making the system free for students during verification and portfolio display.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyOverview;
