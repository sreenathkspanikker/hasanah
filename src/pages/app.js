import React, { useState, useEffect } from 'react'
import Layout from '../layout/layout'
import Message from '../componentes/message'
import Donation from '../modules/donation'
import Project from '../modules/project'

const App = () => {
    const [state, setstate] = useState(false)

    setInterval(() =>  !state && setstate(true), 5000);

    useEffect(() => {
        state && setTimeout(() =>  setstate(false), 5000);
    }, [state])


    return (
        <Layout>
            <Message className={`ml-auto ${state ? 'bounceIn': 'bounceOut'}`}/>
            <Donation />
            <Project />
        </Layout>
    )
}

export default App
