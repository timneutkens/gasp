import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="theme-color" content="#ec008c" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,800,900i"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
