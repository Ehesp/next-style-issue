import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href={`/_next/static/style.css?v=${Math.random().toString(32)}`}
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}
