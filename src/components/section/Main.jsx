import React from 'react'
import Search from './Search'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import ScrollTo from '../../utils/scrollTo'
import Header from './Header'
import Footer from './Footer'


const Main = (props) => {
    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Cooking Youtube"
                defaultTitle="Cooking Youtube"
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>

            <Header />
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main