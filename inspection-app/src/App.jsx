import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => { 
    if (e.target.files[0]) {
      setFile(e.target.files[0]); 
      setStatus(`Selected: ${e.target.files[0].name}`);
    }
  };

  const uploadAndSubmit = async () => {
    if (!file) return alert("Please select a photo first!");
    
    setIsProcessing(true);
    setStatus('🔐 Requesting secure upload link...');

    try {
      // 1. Ask Lambda for the Presigned URL
      const response = await fetch('https://5pyc9zbrve.execute-api.us-east-1.amazonaws.com/prod/submit', { method: 'POST' });
      const { uploadUrl, inspectionId } = await response.json();

      // 2. Upload the file DIRECTLY to S3
      setStatus('📤 Uploading photo to AWS...');
      await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'image/jpeg' },
        body: file
      });

      setStatus(`✅ Success! Inspection ${inspectionId} submitted.`);
    } catch (err) {
      setStatus('❌ Error uploading. Check console for details.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="app-container">
      <div className="inspection-card">
        <span className="upload-icon">📋</span>
        <h1 className="main-title">Inspector Portal</h1>
        <p className="subtitle">Project 3 – Serverless Platform</p>

        {/* Hidden file input triggered by the zone below */}
        <input 
          id="file-input"
          type="file" 
          accept="image/jpeg" 
          onChange={handleFileChange} 
          style={{ display: 'none' }}
        />

        <div className="upload-zone" onClick={() => document.getElementById('file-input').click()}>
          <span className="file-label">
            {file ? '📄 File Ready' : '📁 Click to choose photo'}
          </span>
          {file && <p style={{fontSize: '12px', marginTop: '10px', color: '#636e72'}}>{file.name}</p>}
        </div>

        <button 
          className="submit-btn" 
          onClick={uploadAndSubmit} 
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Submit Inspection'}
        </button>

        {status && <div className="status-msg">{status}</div>}
      </div>
    </div>
  )
}

export default App
