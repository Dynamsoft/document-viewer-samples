import { useEffect } from "react";
import { DDV } from "dynamsoft-document-viewer";
import "./viewer.css"
import "dynamsoft-document-viewer/dist/ddv.css"

export default function Viewer() {
  let beenInitialized = false;

  const init = async () => {
    DDV.on('error', (e) => {
      alert(e.message)
    })
  
    // Public trial license which is valid for 24 hours
    // You can request a 30-day trial key from https://www.dynamsoft.com/customer/license/trialLicense?product=ddv&deploymenttype=browser
    DDV.Core.license = "DLS2eyJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSJ9";
    DDV.Core.engineResourcePath = "/dynamsoft-document-viewer/engine";
    // Preload DDV Resource
    DDV.Core.loadWasm();
    await DDV.Core.init();

    const viewer = new DDV.EditViewer({
        container: 'container'
    });
  }

  useEffect(() => {
    if(!beenInitialized){
      beenInitialized = true;
      init();
    }
  }, [])

  return (
    <>
      <div id="container"></div>  
    </>
  )
}