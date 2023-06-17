import React from "react";
import Head from "next/head";

const HeadTag = () => {
    return (
        <Head>
            <title>Elemantheon Manual</title>
            <meta name="description" content="Interactive instruction manual for the Elemantheon board game (experiment)" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadTag;