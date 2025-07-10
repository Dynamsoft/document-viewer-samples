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

    DDV.Core.license = 'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAwMjI3NzYzLU1UQXdNakkzTnpZekxYZGxZaTFVY21saGJGQnliMm8iLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tbHRzLmR5bmFtc29mdC5jb20iLCJvcmdhbml6YXRpb25JRCI6IjEwMDIyNzc2MyIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbSIsImNoZWNrQ29kZSI6LTE2NDMyMjI1ODl9';
    DDV.Core.engineResourcePath = '/lib/dynamsoft-document-viewer/engine';
    DDV.Core.loadWasm();
    await DDV.Core.init();

    const viewer = new DDV.EditViewer({
      container: 'container',
      uiConfig: DDV.getDefaultUiConfig("editViewer") as UiConfig,
    });
  }
}