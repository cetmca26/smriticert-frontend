import React, { useState } from "react";

const Settings = () => {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [showSocialProfiles, setShowSocialProfiles] = useState(true);
  const [portfolioTheme, setPortfolioTheme] = useState("Default");
  const [accentColor, setAccentColor] = useState("#4C6EF5");

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Portfolio Settings</h2>

      {/* Visibility Settings */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Visibility Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="public-portfolio"
              checked={isPortfolioVisible}
              onChange={() => setIsPortfolioVisible(!isPortfolioVisible)}
              className="mr-2"
            />
            <label htmlFor="public-portfolio" className="text-gray-700 dark:text-gray-300">
              Public Portfolio: Make your portfolio visible to everyone
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">Portfolio URL</label>
            <input
              type="text"
              value="https://myportfolio.example.com/johndoe"
              readOnly
              className="input bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Information Visibility</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showEmail}
                  onChange={() => setShowEmail(!showEmail)}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600 dark:text-gray-400">Show email address</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPhone}
                  onChange={() => setShowPhone(!showPhone)}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600 dark:text-gray-400">Show phone number</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={showSocialProfiles}
                  onChange={() => setShowSocialProfiles(!showSocialProfiles)}
                  className="mr-2"
                />
                <label className="text-sm text-gray-600 dark:text-gray-400">Show social media profiles</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Appearance Settings</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Portfolio Theme</h4>
            <select
              value={portfolioTheme}
              onChange={(e) => setPortfolioTheme(e.target.value)}
              className="input w-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-white"
            >
              <option value="Default">Default</option>
              <option value="Professional">Professional</option>
              <option value="Creative">Creative</option>
              <option value="Minimal">Minimal</option>
            </select>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Accent Color</h4>
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="w-16 h-8 p-0 border-none rounded-md"
            />
          </div>

          <button
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            onClick={() => alert("Appearance Saved!")}
          >
            Save Appearance
          </button>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Portfolio Preview</h3>
        <button
          className="px-6 py-2 bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white rounded"
          onClick={() => alert("Previewing Portfolio...")}
        >
          Preview Portfolio
        </button>
      </div>
    </div>
  );
};

export default Settings;