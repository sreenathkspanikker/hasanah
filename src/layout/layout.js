import React from 'react'
import Header from '../componentes/header'
import Footer from '../componentes/footer'
import { Container } from 'react-bootstrap'

const Layout = props => {
    return (
        <div className="layout">
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
