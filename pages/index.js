import Head from 'next/head'

const consonants = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's', 'y', 'w']; // 声母26个

const singleRhymes = ['a', 'o', 'e', 'i', 'u', 'ü']; // 单韵母6个
const compoundRhymes = ['ai', 'ei', 'ui', 'ao', 'ou', 'iü', 'ie', 'üe', 'er']; // 复韵母9个
const frontNoseRhymes = ['an', 'en', 'in', 'un', 'ün']; // 前鼻韵母5个
const velarRhymes = ['ang', 'eng', 'ing', 'ong'] // 后鼻韵母4个

const integralSyllables = [
    {
        consonant: 'zh',
        rhyme: 'i'
    },
    {
        consonant: 'ch',
        rhyme: 'i'
    },
    {
        consonant: 'sh',
        rhyme: 'i'
    },
    {
        consonant: 'r',
        rhyme: 'i'
    },
    {
        consonant: 'z',
        rhyme: 'i'
    },
    {
        consonant: 'c',
        rhyme: 'i'
    },
    {
        consonant: 's',
        rhyme: 'i'
    },
    {
        consonant: 'y',
        rhyme: 'i'
    },
    {
        consonant: 'w',
        rhyme: 'u'
    },
    {
        consonant: 'y',
        rhyme: 'u'
    },
    {
        consonant: 'y',
        rhyme: 'e'
    },
    {
        consonant: 'y',
        rhyme: 'ue'
    },
    {
        consonant: 'y',
        rhyme: 'uan'
    },
    {
        consonant: 'y',
        rhyme: 'in'
    },
    {
        consonant: 'y',
        rhyme: 'un'
    },
    {
        consonant: 'y',
        rhyme: 'ing'
    },
]; // 整体认读音节16个

export default function Home() {
    // 声母列表
    const consonantsListItems = consonants.map((consonant, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score consonant"> </span> <span className="alphabet consonant">{consonant}</span>
        </li>
    );
    // 单韵母列表
    const singleRhymesListItems = singleRhymes.map((rhyme, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score rhyme"> </span> <span className="alphabet rhyme">{rhyme}</span>
        </li>
    )
    // 复韵母列表
    const compoundRhymesListItems = compoundRhymes.map((rhyme, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score rhyme"> </span> <span className={`alphabet rhyme ${rhyme==='üe'?'reduce-kerning':''}`}>{rhyme}</span>
        </li>
    )
    // 前鼻韵母列表
    const frontNoseRhymesListItems = frontNoseRhymes.map((rhyme, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score rhyme"> </span> <span className={`alphabet rhyme ${rhyme==='ün'?'reduce-kerning':''}`}>{rhyme}</span>
        </li>
    )
    // 后鼻韵母列表
    const velarRhymesListItems = velarRhymes.map((rhyme, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score rhyme"> </span> <span className="alphabet rhyme">{rhyme}</span>
        </li>
    )
    // 整体认读音节
    const integralSyllablesListItems = integralSyllables.map((syllable, index) =>
        <li className="alphabet-container" key={index}>
            <span className="four-line-score syllable"> </span>
            <span className="alphabet syllable"><span className="consonant">{syllable.consonant}</span><span className="rhyme">{syllable.rhyme}</span>
        </span>
        </li>);

    return (
        <div className="container">
            <Head>
                <title>汉语拼音字母表 Chinese Pinyin Alphabet</title>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="header">
                <div>
                    <h1 className="title" lang="zh-hans">汉语拼音字母表</h1>
                    <span lang="en" className="sub-title">Chinese Pinyin Alphabet</span>
                </div>
                <span>Created by <a href="https://www.millielin.com">Millie Lin</a></span>
            </header>
            <main>
                {/*    声母表    */}
                <section className="section">
                    <h2 className="section-title consonant">
                        <span lang="zh-hans">声母26个</span><span lang="en">26 Consonants (Initials)</span></h2>
                    <ul className="alphabets-list">
                        {consonantsListItems}
                    </ul>
                </section>
                {/*    韵母表    */}
                <section className="section">
                    <h2 className="section-title rhyme">
                        <span lang="zh-hans">韵母24个</span><span lang="en">24 Vowels (Finals)</span></h2>
                    <h3 className="sub-section-title">单韵母6个 <span lang="en">6 Single Vowels</span></h3>
                    <ul className="alphabets-list">
                        {singleRhymesListItems}
                    </ul>
                    <h3 className="sub-section-title">复韵母9个 <span lang="en">9 Compound Vowels</span></h3>
                    <ul className="alphabets-list">
                        {compoundRhymesListItems}
                    </ul>
                    <h3 className="sub-section-title">前鼻韵母5个 <span lang="en">5 front-nasal vowels</span></h3>
                    <ul className="alphabets-list">
                        {frontNoseRhymesListItems}
                    </ul>
                    <h3 className="sub-section-title">后鼻韵母4个 <span lang="en">4 post-nasal vowels</span></h3>
                    <ul className="alphabets-list">
                        {velarRhymesListItems}
                    </ul>
                </section>
                {/* 整体认读音节 16个 */}
                <section className="section">
                    <h2 className="section-title syllable">
                        <span lang="zh-hans">整体认读音节16个</span><span lang="en">16 Integral Syllables</span></h2>
                    <ul className="alphabets-list">
                        {integralSyllablesListItems}
                    </ul>
                </section>

            </main>
        </div>
    )
}
