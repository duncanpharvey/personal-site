import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { datadogRum } from '@datadog/browser-rum';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  const root = createRoot(rootElement);
  root.render(<StrictApp />);
}

datadogRum.init({
  applicationId: '4f7ca778-f45e-49e1-9069-51392cfc1d48',
  clientToken: 'pube44ae88f4243611fc1a52b27e958738d',
  site: 'datadoghq.com',
  service: 'duncanpharvey.com',
  env: 'prod',
  version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
});

datadogRum.startSessionReplayRecording();
