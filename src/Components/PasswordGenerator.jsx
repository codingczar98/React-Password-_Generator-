import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(5);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?';

    let characters = '';
    let generatedPassword = '';

    if (includeUppercase) characters += uppercaseChars;
    if (includeLowercase) characters += lowercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
    setCopied(false); // Reset copied state when generating a new password
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="password-generator">
      <div className="my-14 mx-auto  max-w-md p-4 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
        <div className="mb-4">
          <label>Password Length:</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
            className="border rounded px-3 py-2 w-full outline-none"
          />
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="mr-2"
            />
            Include Uppercase Letters
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="mr-2"
            />
            Include Lowercase Letters
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="mr-2"
            />
            Include Numbers
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="mr-2"
            />
            Include Symbols
          </label>
        </div>
        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
        >
          Generate Password
        </button>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Generated Password:</h3>
          <textarea
            rows="3"
            value={password}
            readOnly
            className="border rounded px-3 py-2 w-full outline-none "
          />
          <button
            onClick={copyToClipboard}
            className="bg-gray-300 text-gray-700 px-3 py-1 rounded mt-2 hover:scale-95 outline-none"
          >
            Copy to Clipboard
          </button>
          {copied && <span className="text-green-700 ml-2">Text Copied!</span>}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
