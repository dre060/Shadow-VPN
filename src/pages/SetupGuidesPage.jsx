import React from 'react';

function SetupGuidesPage() {
  return (
    <div className="min-h-screen px-6 py-12 text-white bg-black">
      <h1 className="text-3xl font-bold mb-4">Setup Guides</h1>
      <p className="text-gray-400 text-lg max-w-3xl">
        Welcome to the ShadowVPN Setup Guides. Select your platform to get started with step-by-step instructions.
      </p>

      <ul className="mt-8 space-y-4">
        <li className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
          <strong className="text-white">Windows</strong> – Download the app and follow the Windows setup wizard.
        </li>
        <li className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
          <strong className="text-white">MacOS</strong> – Install using the .dmg file and enable permissions in system settings.
        </li>
        <li className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
          <strong className="text-white">iOS & Android</strong> – Get ShadowVPN from the App Store or Google Play and use your login credentials.
        </li>
      </ul>
    </div>
  );
}

export default SetupGuidesPage;
