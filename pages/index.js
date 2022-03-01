import { SearchIcon } from '@heroicons/react/outline';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests';


export default function Home({ results }) {

  const [query, setQuery] = useState('')
  const [savedKeyw, setSavedKeyw] = useState([])

  const saved = () => {
    if (!query) {
    } else {
     savedKeyw.length < 5 && setSavedKeyw([...savedKeyw, query])
      setQuery('')
    }
  }

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(savedKeyw))
  }, [savedKeyw])





  return (
    <div >
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex  justify-center '>
        <Header />
        <div className='flex flex-col mt-6'>
          <div className='flex bg-white h-6'>
            <input onChange={e => setQuery(e.target.value)} className='flex outline-none border-none text-black' type="text" />
            <SearchIcon onClick={saved} color='grey' width={24} height={24} />
          </div>
        </div>
      </div>
      

      <Nav />
      <Results query={query} setQuery={setQuery} results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url
    || requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}

