import '@/styles/error.scss';
import React, { ReactElement } from 'react';
import { Head } from 'next/document';

export default function ErrorPage(): ReactElement {
  return (
    <main className="bsod container">
      <h1 className="neg title"><span className="bg">Error - 404</span></h1>
      <p>An error has occurred, to continue:</p>
      <p>* Return to our homepage.<br />
        * Send us an e-mail about this error and try later.</p>
      <nav className="nav">
        <a href="/" className="link">index</a>&nbsp;|&nbsp;<a href="https://genemator.me" className="link">webmaster</a>
      </nav>
    </main>
  );
}
