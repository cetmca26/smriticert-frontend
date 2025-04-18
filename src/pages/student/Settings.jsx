import React, { useState } from "react";

const Settings = () => {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(true);
  const [showSocialProfiles, setShowSocialProfiles] = useState(true);
  const [portfolioTheme, setPortfolioTheme] = useState("Default");
  const [accentColor, setAccentColor] = useState("#4C6EF5");

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Portfolio Settings
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visibility Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Visibility Settings
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="public-portfolio"
                checked={isPortfolioVisible}
                onChange={() => setIsPortfolioVisible(!isPortfolioVisible)}
                className="mr-2"
              />
              <label
                htmlFor="public-portfolio"
                className="text-gray-700 dark:text-gray-300"
              >
                Public Portfolio: Make your portfolio visible to everyone
              </label>
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Portfolio URL
              </label>
              <input
                type="text"
                readOnly
                value="https://myportfolio.example.com/johndoe"
                className="mt-1 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-md"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Information Visibility
              </h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showEmail}
                    onChange={() => setShowEmail(!showEmail)}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Show email address
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showPhone}
                    onChange={() => setShowPhone(!showPhone)}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Show phone number
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showSocialProfiles}
                    onChange={() => setShowSocialProfiles(!showSocialProfiles)}
                    className="mr-2"
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Show social media profiles
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Appearance Settings
          </h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Portfolio Theme
              </label>
              <select
                value={portfolioTheme}
                onChange={(e) => setPortfolioTheme(e.target.value)}
                className="mt-1 w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md"
              >
                <option value="Default">Default</option>
                <option value="Professional">Professional</option>
                <option value="Creative">Creative</option>
                <option value="Minimal">Minimal</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 block mb-1">
                Accent Color
              </label>
              <input
                type="color"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="w-16 h-8 rounded border-none"
              />
            </div>

            <button
              className="w-full mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              onClick={() => alert("Appearance Saved!")}
            >
              Save Appearance
            </button>
          </div>
        </div>

        {/* Portfolio Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 lg:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Portfolio Preview
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            You can preview how your portfolio will appear with the selected
            theme and settings.
          </p>
          <button
            className="px-6 py-2 bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
            onClick={() => alert("Previewing Portfolio...")}
          >
            Preview Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
