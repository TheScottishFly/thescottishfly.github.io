import Link from 'next/link';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import NextSeo from 'next-seo';

const description = "L'accompagnement est, à mon sens, une des facettes les plus enrichissantes du statut de freelance ... Et à travers celle-ci, le partage et l'éducation, qui en sont indissociables ! Je profite aujourd'hui de ce site pour partager à l'aide de l'écriture 👐";

const ArticlesList = (props) => (
    <Layout>
        <NextSeo
            config={{
                title: "Quelques articles écrits pour vous",
                description: description
            }}
        />
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">L</span>'accompagnement est, à mon sens, une des facettes les plus enrichissantes du statut de freelance ...
            <br/>
            Et à travers celle-ci, le partage et l'éducation, qui en sont indissociables ! 👐
        </p>
        <h1 className="md:text-5xl text-4xl my-12">Quelques articles écrits pour vous</h1>
        <div>
            <blockquote>
                “Le savoir est la seule matière qui s’accroît quand on le partage.”
            </blockquote>
            <p className="mt-2 w-full italic text-sm text-right">
                Socrate 👴🏼
            </p>
        </div>
        <div className="self-center lg:w-1/2 sm:w-2/3 w-5/6 my-24">
            <img src="/static/img/undraw_typewriter_i8xd.svg" alt="Typewriter"/>
        </div>
        <div className="flex flex-col ml-8">
            <Link href="/articles/travailler-avec-freelance-avantages">
                <a className="flex flex-row items-center justify-between text-bluec text-lg rounded shadow-lg hover:shadow p-4">
                    <span>Travailler avec un freelance, quels avantages ?</span>
                    <span>&#8594;</span>
                </a>
            </Link>
            <Link href="/articles/django-quesako">
                <a className="flex flex-row items-center justify-between text-bluec text-lg rounded shadow-lg hover:shadow p-4">
                    Django, quésako ?
                    <span>&#8594;</span>
                </a>
            </Link>
            <Link href="#">
                <a className="hidden flex flex-row items-center justify-between text-bluec rounded text-lg shadow-lg hover:shadow p-4">
                    Node.js, React.js, Vue.js, MachinChose.js, ...(js)
                    <span>&#8594;</span>
                </a>
            </Link>
            <Link href="#">
                <a className="hidden flex flex-row items-center justify-between text-bluec rounded text-lg shadow-lg hover:shadow p-4">
                    Pourquoi Wordpress est parfois la meilleure solution ?
                    <span>&#8594;</span>
                </a>
            </Link>
            <Link href="#">
                <a className="hidden flex flex-row items-center justify-between text-bluec rounded text-lg shadow-lg hover:shadow p-4">
                    Le perfectionnisme, ce partenaire aux deux visages
                    <span>&#8594;</span>
                </a>
            </Link>
        </div>
        <BackButton />
        <style jsx>{`
            
        `}</style>
    </Layout>
);

export default ArticlesList;
