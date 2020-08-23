import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import CharacterList from '../components/characterList';

const Home = () => (
  <>
    <Head>
      <title>Rick and Morty - Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <div className="wrapper">
      <div className="header">
        <h1 className="title">Rick and Morty</h1>
        <Nav />
      </div>
      <main style={{ padding: '20px 0'}}>
        <CharacterList />
      </main>
    </div>
    
    <style jsx>{`
      .wrapper {
        max-width: 1024px;
        margin: auto;
      }
      .header {
        width: 100%;
        color: #333;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dedede;
      }
      .title {
        line-height: normal;
        font-size: 30px;
        margin: 0 0 0 20px;
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
)

export default Home
