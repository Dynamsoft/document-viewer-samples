import { useEffect } from 'react'
import { DDV } from 'dynamsoft-document-viewer'
import "dynamsoft-document-viewer/dist/ddv.css"
import "./Viewer.css"
export default function Viewer() {
  const init = async () => {
    DDV.on('error', (e) => {
      alert(e.message)
    })
  
    // Public trial license which is valid for 24 hours
    // You can request a 30-day trial key from https://www.dynamsoft.com/customer/license/trialLicense?product=ddv&deploymenttype=browser
    DDV.Core.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjM0ODEwLU1qTTBPREV3TFZSeWFXRnNVSEp2YWciLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tbHRzLmR5bmFtc29mdC5jb20iLCJvcmdhbml6YXRpb25JRCI6IjIzNDgxMCIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbSIsImNoZWNrQ29kZSI6LTQ1NDQzOTUwOH0";
    DDV.Core.engineResourcePath = "/dynamsoft-document-viewer/engine";
    // Preload DDV Resource
    DDV.Core.loadWasm();
    await DDV.Core.init();

    const viewer = new DDV.EditViewer({
      container: 'container'
    });
  }

  useEffect(() => {
    init();
  },[])

  return (
    <div id="container"></div>
  )
}