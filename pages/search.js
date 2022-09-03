import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults';
export default function Search({ results }) {
    const router = useRouter();
    console.log(results)
  return (
      <div>
          <Head>
              <title>{router.query.term}- Google Search</title>
          </Head>
          <Header />
          
          {/*Search Results*/}
          <SearchResults results={results} />

    </div>
  )
}
export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response
        : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&star${startIndex}`
    ).then(response => response.json());

    //After the server has rendered..pass the results to the client..
    return {
        props: {
            results:data
        }
    }
}


