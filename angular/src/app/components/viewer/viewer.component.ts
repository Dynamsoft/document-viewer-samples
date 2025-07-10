import type { UiConfig } from 'dynamsoft-document-viewer';
import { Component } from '@angular/core';
import { DDV } from 'dynamsoft-document-viewer';

// The external CSS for an Angular project should be imported via the angular.json file.
// import "dynamsoft-document-viewer/dist/ddv.css"

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.css'
})

export class ViewerComponent {
  async ngOnInit() {
    DDV.on('error', (e) => {
      alert(e.message)
    })

    DDV.Core.license = 'DLS2eyJoYW5kc2hha2VDb2RlIjoiMjM0ODEwLU1qTTBPREV3TFZSeWFXRnNVSEp2YWciLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tbHRzLmR5bmFtc29mdC5jb20iLCJvcmdhbml6YXRpb25JRCI6IjIzNDgxMCIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbSIsImNoZWNrQ29kZSI6LTQ1NDQzOTUwOH0';
    DDV.Core.engineResourcePath = '/lib/dynamsoft-document-viewer/engine';
    DDV.Core.loadWasm();
    await DDV.Core.init();

    const viewer = new DDV.EditViewer({
      container: 'container',
      uiConfig: DDV.getDefaultUiConfig("editViewer") as UiConfig,
    });
  }
}