import React from "react";
import Head from "next/head";

const HeadTag = () => {
    return (
        <Head>
            <title>Elemantheon Manual</title>
            <meta name="description" content="Instruction manual for the Elemantheon board game (control)" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default HeadTag;