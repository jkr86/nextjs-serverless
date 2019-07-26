import Head from 'next/head';

function About() {
    return (
        <main>
            <Head>
                <title>About</title>
            </Head>
            <h1>About Page Works</h1>
            <style jsx>{`
                   h1{
                   color: cyan;
                   font-size: 4em;
                   text-align:center;
                   }
      `}</style>
        </main>
    );
}

export default About;
