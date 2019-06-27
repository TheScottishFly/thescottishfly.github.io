import Link from 'next/link';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import NextSeo from 'next-seo';

const description = "Trouver un freelance, c'est la première étape, s'assurer qu'il a les capacités de vous apporter de la valeur, c'est la suivante ! Voici une petite partie de mon expérience, en tant que freelance ou CTO.";

const Portfolio = (props) => (
    <Layout>
        <NextSeo
            config={{
                title: "Une partie de mon expérience",
                description: description
            }}
        />
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">W</span>ork in Progress ...
        </p>
        <h1 className="md:text-5xl text-4xl my-12">Une partie de mon expérience</h1>
        <div className="self-center lg:w-1/2 sm:w-2/3 w-5/6 my-24">
            <img src="/static/img/undraw_in_progress_ql66.svg" alt="In progress"/>
        </div>
        <BackButton />
        <style jsx>{`

        `}</style>
    </Layout>
);

export default Portfolio;
