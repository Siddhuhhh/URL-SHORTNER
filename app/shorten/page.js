"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${window.location.origin}/${shorturl}`)  // ✅ use this instead of process.env
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl text-purple-900'>Generate your short URLs</h1>
            
            <div className='flex flex-col gap-3'>
                <input
                    type="text"
                    value={url}
                    className='px-4 py-2 border border-purple-300 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                    placeholder='Enter your long URL'
                    onChange={e => seturl(e.target.value)}
                />

                <input
                    type="text"
                    value={shorturl}
                    className='px-4 py-2 border border-purple-300 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600'
                    placeholder='Enter your preferred short URL path'
                    onChange={e => setshorturl(e.target.value)}
                />

                <button
                    onClick={generate}
                    className='bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold py-2 px-4 transition duration-200'
                >
                    Generate
                </button>
            </div>

            {generated && (
                <div className='mt-6 bg-green-100 text-green-800 border border-green-300 p-4 rounded text-center'>
                    <span className='font-bold'>Your Link:</span>
                    <br />
                    <Link href={generated} target="_blank" className='underline text-blue-700 break-all'>
                        {generated}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Shorten



