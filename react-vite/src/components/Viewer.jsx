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
      DDV.Core.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAwMjI3NzYzLU1UQXdNakkzTnpZekxYZGxZaTFVY21saGJGQnliMm8iLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tbHRzLmR5bmFtc29mdC5jb20iLCJvcmdhbml6YXRpb25JRCI6IjEwMDIyNzc2MyIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbSIsImNoZWNrQ29kZSI6LTE2NDMyMjI1ODl9";
      DDV.Core.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-document-viewer@latest/dist/engine";
      // Preload DDV Resource
      DDV.Core.loadWasm();
      await DDV.Core.init();

      const viewer = new DDV.EditViewer({
          container: 'container',
          uiConfig: DDV.getDefaultUiConfig("editViewer"),
      });
  }

  useEffect(() => {
    init();
  },[])

  return (
        <div id="container"></div>
  )
}