import React, { useState, ChangeEvent, useEffect } from 'react';
import Tesseract from 'tesseract.js';

const App: React.FC = () => {
  const [api_key, setApiKey] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>('');
  const [chatGptResponse, setChatGptResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      setChatGptResponse('');
    }
  }, [loading]);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      const text = await performOCR(file);
      setEditedText(text);
    }
  };

  const performOCR = async (imageFile: File) => {
    const { data: { text } } = await Tesseract.recognize(
      imageFile,
      'jpn',
      { logger: (info) => console.log(info) }
    );
    return text;
  };

  const handleChatGptSubmit = async () => {
    try {
      if (!api_key) {
        console.error('API key is not provided');
        return;
      }
      const URL = "https://api.openai.com/v1/chat/completions";
      const payload = {
        "model": "gpt-3.5-turbo-1106",
        "messages": [
          {
            "role": "user",
            "content": editedText,
          }
        ],
        "max_tokens": 4096,
      };

      setLoading(true);

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api_key}`
        },
        body: JSON.stringify(payload),
        mode: 'cors'
      });

      if (!response.ok) {
        console.log(response)
        throw new Error(response.status.toString());
      }

      const responseData = await response.json();
      setChatGptResponse(responseData.choices[0].message.content);
    } catch (error: any) {
      console.error('Error sending request to ChatGPT:', error);
      setChatGptResponse(`Error: ${error.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-8 p-8 border rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-6">ChatGPT + Tesseract.js App</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          ChatGPT API Key
        </label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter API Key"
          value={api_key}
          onChange={(e) => setApiKey(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {uploadedImage && (
        <div className="mb-4">
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="mb-4 max-w-full h-auto rounded"
          />
          <h3 className="text-lg font-semibold mb-2">OCR Text</h3>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={6}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      )}

      <button
        onClick={handleChatGptSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit to ChatGPT'}
      </button>

      {chatGptResponse && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">ChatGPT Response</h3>
          <div className="p-2 border rounded">{chatGptResponse}</div>
        </div>
      )}
    </div>
  );
};

export default App;
