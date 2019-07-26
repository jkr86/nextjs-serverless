import { useEffect, useState } from 'react';
import Head from 'next/head';

function About() {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        async function getAbout() {
            const res = await fetch('/about');
            const newAbout = await res.json();
            setAbout(newAbout);
        }
        getAbout();
    }, []);
    return (
        <main>
            <Head>
                <title>About</title>
            </Head>
            <h1>Page Deployed Successfully</h1>
            <style jsx>{`
                   h1{
                   color: cyan;
                   font-size: 12em;
                   text-align:center;
                   }
      `}</style>
        </main>
    );
}

export default About;
