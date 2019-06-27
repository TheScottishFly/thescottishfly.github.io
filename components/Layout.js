import Link from 'next/link';
import Head from 'next/head';
import NextSeo from 'next-seo';
import { slide as Menu } from 'react-burger-menu';
import 'medium.css';

import {DEFAULT_SEO, burgerStyle} from './variables/layout';
import { SocialProfileJsonLd } from 'next-seo';

import "../static/css/base.scss";
import "../static/css/tailwind.min.css";

const Layout = (props) => (
    <div>
        <Head>
            <link rel="shortcut icon" type="image/x-icon" href="/static/img/favicon.ico" />
        </Head>
        <NextSeo config={DEFAULT_SEO} />
        <SocialProfileJsonLd
            type="Person"
            name="Gilian ROSNET"
            url="https://www.gilianrosnet.fr"
            sameAs={[
                'https://www.linkedin.com/in/gilian-rosnet/',
            ]}
        />
        <div className="md:invisible visible">
            <Menu styles={burgerStyle}>
                <Link href="/">
                    <a className="menu-item my-4">Accueil</a>
                </Link>
                <Link href="/articles">
                    <a className="menu-item my-4">Articles</a>
                </Link>
                <Link href="/portfolio">
                    <a className="menu-item my-4">Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a className="menu-item my-4">Contact</a>
                </Link>
            </Menu>
        </div>
        <div id="headerCorail" className="flex flex-col w-3/4 relative bg-corail rounded-br-full h-40 shadow-md">
            <div id="menu-medium" className="flex flex-row pt-1 px-6 md:visible invisible absolute bg-gold h-20 rounded-r-lg shadow-lg">
                <Link href="/">
                    <a className="menu-item">Accueil</a>
                </Link>
                <Link href="/articles">
                    <a className="menu-item mx-4">Articles</a>
                </Link>
                <Link href="/portfolio">
                    <a className="menu-item">Portfolio</a>
                </Link>
                <Link href="/contact">
                    <a className="menu-item ml-4">Contact</a>
                </Link>
            </div>
            <img className="absolute right-0 w-32 mr-16" src="/static/img/logo_transparent.png" alt="Logo gilian rosnet"/>
        </div>
        <div id="content" className="flex flex-col md:w-1/2 sm:w-2/3 w-full sm:px-0 px-8 mx-auto py-12">
            {props.children}
        </div>
        <div className="flex flex-col items-center justify-center fixed right-0 bottom-0 mr-8 mb-8 w-16 h-16 rounded-full z-50">
            <a href="mailto:contact@gilianrosnet.fr" className="flex flex-row items-center justify-center m-2">
                <img alt="Envoyer un mail" id="contactIcon" src="data:image/png;base64,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" />
            </a>
        </div>
        <style jsx>{`
            #headerCorail {
                min-width: 18rem;
            }
            #menu-medium {
                bottom: -2.25rem;
            }
            #menu-medium a {
                color: #065471;
            }
            #contactIcon {
                filter: drop-shadow(0 0 3px black);
                transition: filter 0.2s;
            }
            #contactIcon:hover {
                filter: drop-shadow(0 0 1px black);
            }
            .menu-item {
                transition: color 0.2s ease;
                white-space: nowrap;
            }
            .menu-item:hover {
                color: white !important;
            }
        `}</style>
    </div>
);

export default Layout;
