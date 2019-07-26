import Head from 'next/head';

function About() {
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
