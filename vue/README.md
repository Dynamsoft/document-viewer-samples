# Hello World Vue App

This project was bootstrapped with [Create Vue App](https://github.com/vuejs/vue-cli). It utilizes the solution [Dynamsoft Document Viewer](https://www.dynamsoft.com/document-viewer/docs/introduction/) to provide the following functionalities

- Viewing and editing images and PDFs
- PDF annotation
- Page manipulation
- Image quality enhancement
- Document saving

## Usage

Environment: Node.js v18.14.0

1. Apply for a [30-day free trial license](https://www.dynamsoft.com/customer/license/trialLicense?product=ddv) of Dynamsoft Document Viewer.

2. Update the license key in `src\Component\Viewer.vue` file:

   ```javascript
   // your license key
   DDV.Core.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAwMjI3NzYzLU1UQXdNakkzTnpZekxYZGxZaTFVY21saGJGQnliMm8iLCJtYWluU2VydmVyVVJMIjoiaHR0cHM6Ly9tbHRzLmR5bmFtc29mdC5jb20iLCJvcmdhbml6YXRpb25JRCI6IjEwMDIyNzc2MyIsInN0YW5kYnlTZXJ2ZXJVUkwiOiJodHRwczovL3NsdHMuZHluYW1zb2Z0LmNvbSIsImNoZWNrQ29kZSI6LTE2NDMyMjI1ODl9";
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Run the application as follows:

   ```
   npm run dev
   ```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 
It correctly bundles Vue in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!