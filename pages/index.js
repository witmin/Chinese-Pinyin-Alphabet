import Head from 'next/head'

export default function Home() {
    const initialAlphabets = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w'];
    const initialListItems = initialAlphabets.map((alphabet) =>
        <li className="alphabet-container">
            <span className="four-line-score"></span>
            <span className="alphabet">{alphabet}</span></li>
    );
    return (
        <div className="container">
            <Head>
                <title>汉语拼音字母表</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="header">
                <h1 className="title">汉语拼音字母表</h1>
                <a href="https://www.millielin.com">Millie Lin</a>
            </header>
            <main>
                {/*    声母表    */}
                <section className="section">
                    <h2 className="section-title initials">声母26个</h2>
                    <ul className="alphabets-list">
                        {initialListItems}
                    </ul>

                </section>


            </main>
        </div>
    )
}
