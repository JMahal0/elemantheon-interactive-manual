import React from "react";
import Head from "next/head";

const HeadTag = () => {
    return (
        <Head>
            <title>Elemantheon Manual</title>
            <meta name="description" content="Interactive instruction manual for the Elemantheon board game (experiment)" />
            <link rel="icon" type="image/png" href="/logo-wordless transparent bg.png" />
        </Head>
    );
}

export default HeadTag;