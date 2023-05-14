
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {

  // Add function to print hello on click
    const handleClick = () => {
        console.log('hello');
    }
  return (
    <>
    <Layout>  
          <h1>Hello! 😀 This is my first post!</h1>
          <Head>
            <title>First Post</title>
            <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() => {
        window.fbAsyncInit = function() {
          console.log(`Facebook SDK initialized`);
        };
      }}
          />
          </Head>
        
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
          <img src="/images/profile.jpg" alt="Your Name" />
    </Layout>
    </>
  );
}