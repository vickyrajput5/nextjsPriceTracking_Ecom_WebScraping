"use client"
import { scrapeAndStoreProduct } from '@/lib/actions';
import { url } from 'inspector'
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) =>{
    try {
       const parsedURL = new URL(url);
       const hostname = parsedURL.hostname;

       if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.includes('amazon')){
        return true
       }

    } catch (error) {
        return false
    }
    return false
}

const Searchbar = () => {
  const [searchpropmt, setSearchpropmt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
    const handleSubmit= async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchpropmt)
        if(!isValidLink) return alert('please provide valid link')

        try {
            setIsLoading(true)

            const product = await scrapeAndStoreProduct(searchpropmt)
        } catch (error) {
            console.log(error)
        }finally{
        setIsLoading(false)
        }
    }
  return (
   <form 
    className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}
   >
     <input
     type='text'
     placeholder='Enter Product Link'
     className='searchbar-input'
     value={searchpropmt}
     onChange={(e)=> setSearchpropmt(e.target.value)}
     />
     <button type='submit' className='searchbar-btn' disabled={searchpropmt===""}>
         {isLoading ? "Searching...." : "Search"}
     </button>
   </form>
  )
}

export default Searchbar
