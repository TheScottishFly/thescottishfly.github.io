import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import NextSeo from 'next-seo';
import Link from "next/link";

const description = "Django est un framework web Python, une boîte à outils qui permet de faire vite et bien, sans avoir à sacrifier la sécurité du projet, ni à réinventer la roue. C'est mon choix de prédilection, surtout pour le développement des POC et des prototypes.";

const DjangoQuesako = (props) => (
    <Layout>
        <NextSeo
            config={{
                title: "Django, quésako ? · Articles",
                description: description
            }}
        />
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">D</span>jango ...
            <br/>
            Mon premier amour informatique, qui ne me quitte plus depuis ! <span className="text-corail">❤️</span>
        </p>
        <h1 className="md:text-5xl text-4xl my-12">Django: The Web framework for perfectionists with deadlines</h1>
        <div>
            <blockquote>
                “Django. D J A N G O. J’insiste sur le D.”
            </blockquote>
            <p className="mt-2 w-full italic text-sm md:text-center text-right">
                <a className="italic text-sm text-tealc hover-link" href="https://www.imdb.com/title/tt1853728/" target="_blank">Django Unchained</a>
                , Django. 🔫
            </p>
            <p className="mt-12">Django est le <mark>framework web le plus utilisé</mark> dans l'écosystème du langage Python.</p>
            <p>En quelque sorte, c'est une boite à outils, dans laquelle sont déjà prédéfinies des fonctionnalités que nous n'aurons pas à ré-écrire à chaque projet.</p>
            <p className="mt-4">Et c'est exactement dans cette optique qu'il a été conçu, celle de permettre aux développeurs de <strong>construire un projet solide</strong>, <strong>rapidement</strong>, <strong>sans surprise</strong>, et sans avoir à faire de concessions sur la <strong>qualité du code</strong> ou la <strong>sécurité</strong>.</p>
            <p className="mt-4">Et tous ceux qui en ont fait l'expérience s'accordent à le dire, il s'en sort <span className="highlighted">merveilleusement bien</span> !</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Drôlement adapté au prototypage, n'est-il pas ?</h2>
        <div>
            <p>A notre époque, et vous êtes probablement bien placé pour le savoir, lorsque l'on démarre un projet, plus le <strong>TTM est court</strong> (Time To Market - le laps de temps entre la conception de votre produit et sa mise sur le marché), <strong>mieux c'est</strong>. 🚄</p>
            <p className="mt-4"><strong>L'utilisation de Django</strong> est donc un <strong>avantage concurrentiel</strong> qui peut s'avérer <strong>précieux</strong> !</p>
            <p className="mt-4">Je vais essayer de vous donner un exemple :</p>
            <div className="ml-8 my-4">
                <p>- Créer le <strong>squelette de l'application</strong> prend à peine <strong>quelques heures</strong>. 🐰</p>
                <p>- Il est livré avec un <strong>système de gestion des utilisateurs</strong>, un <strong>panel d'administration</strong> relativement puissant, des fonctionnalités destinées à <strong>gérer les failles de sécurité</strong> les plus connues, et bien d'autres encore qu'il serait trop long de détailler.</p>
            </div>
            <p>Combinés, <strong>ces deux seuls points</strong> peuvent parfois prendre <strong>plusieurs semaines de développement</strong> selon votre équipe ...</p>
            <p>Vous voyez où je veux en venir ? 😉</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Du prototype à la version "finale"</h2>
        <div>
            <p>Développer rapidement un prototype, cela place <strong>l'entreprise</strong> dans de <strong>meilleures conditions</strong>, mais ensuite ?</p>
            <p className="">Si je devais absolument choisir un défaut à Django, ce serait sa <strong>scalabilité</strong> un peu particulière, qui nécessitera plus de matériel que d'autres solutions ...</p>
            <blockquote className="my-8">
                Compared to development time, hardware is cheap
                <p className="mt-2 w-full italic text-sm md:text-center text-right">
                    Un des messieurs qui a écrit la documentation 😁
                </p>
            </blockquote>
            <p className="mt-4">Il existe de <strong>nombreux points d'optimisation</strong> que peu de développeurs respectent, mais même en faisant attention, une instance aura souvent du mal à dépasser les <strong>10.000 requêtes par seconde</strong>.</p>
            <p className="mt-4">A côté d'un Node.js ou d'un Golang qui ont tendance à pouvoir encaisser au moins 4x plus, ça pèche un peu ...</p>
            <p className="mt-4">Bien heureusement, l'équipe de développement à penser à tout lors de sa conception, et le framework <mark>intègre des mécanismes de scalabilité horizontale</mark> lui permettant de <mark>tirer profit d'autant de matériel</mark> (serveurs, bases de données, caches) que vous le souhaitez, et cela <span className="font-bold">très facilement</span>.</p>
            <p className="mt-4">A cela, j'ajoute toujours : Si des acteurs aussi importants que <strong>Pinterest</strong>, <strong>Instagram</strong>, <strong>Mozilla</strong>, <strong>Washington Post</strong> et d'autres s'en sortent avec, alors vous devriez probablement pouvoir y <strong>trouver votre compte</strong> également !</p>
            <p className="mt-4">La suite ne dépend donc <strong>que de vous</strong> et de <strong>votre stratégie</strong> !</p>
        </div>
        <div>
            <Link href="/contact">
                <button className="mt-8 text-white text-xl px-3 py-2 bg-corail rounded shadow-lg hover:shadow">Prêt à accélérer votre business ? 🚀️</button>
            </Link>
        </div>
        <BackButton />
        <style jsx>{`
            
        `}</style>
    </Layout>
);

export default DjangoQuesako;
