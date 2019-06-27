import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import NextSeo from 'next-seo';
import Link from "next/link";

const description = "Collaborer avec un freelance peut parfois s'avérer bien plus pertinent que l'embauche d'un salarié. Expertise, flexibilité, réactivité, sécurité ... Quels sont exactement les avantages à travailler avec un freelance ?";


const Freelance = (props) => (
    <Layout>
        <NextSeo
            config={{
                title: "Travailler avec un freelance, quels avantages ? · Articles",
                description: description
            }}
        />
        <p className="text-sm font-bold sm:mt-8 sm:mb-0 mt-0 mb-8">Cet article intègre ma vision du freelancing, il n'engage évidemment que moi.</p>
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">+</span>110 % en 10 ans, <strong>plus de 900.000</strong> en France ...
            <br/>
            Les freelances font aujourd'hui partie intégrante du monde du travail, et pour cause, <strong>les raisons de travailler avec eux sont nombreuses</strong> ! 😉
        </p>
        <h1 className="md:text-5xl text-4xl my-12">La collaboration avec un freelance, quels avantages ?</h1>
        <div>
            <p className="">Avant toute chose, qu'est-ce qu'un freelance ?</p>
            <p className="mt-4">C'est un travailleur <strong>indépendant</strong>, qui est donc <strong>à son compte</strong>, et par là même, soumis aux mêmes contraintes et obligations que tout patron de TPE.</p>
            <p className="mt-4">Il <strong>choisit ses missions</strong>, bénéficie généralement d'une <strong>grande autonomie</strong> et fixe ses tarifs en fonction de ses <strong>compétences</strong> et de la <strong>valeur</strong> qu'il apporte à ses clients.</p>
            <p className="mt-4">Vous l'aurez compris, le freelancing dont je parle est à milles lieues des pratiques désastreuses de certaines entreprises qui utilisent l'indépendance dans le seul but d'échapper à certains de leurs devoirs ...</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Un travail de qualité</h2>
        <div>
            <p>Sa survie dépend de sa capacité à facturer, et pour cette raison, <strong>sa priorité est de satisfaire</strong> ses clients !</p>
            <p className="mt-4">Que ce soit pour <strong>fidéliser</strong>, pour accroître son <strong>expertise</strong> ou pour asseoir sa <strong>notoriété</strong>, il est primordial pour la pérrenité de son activité que son travail réponde aux besoins de la bonne manière, <strong>en produisant de la qualité</strong>. 💎</p>
            <p className="mt-4">Pour ce faire, il devra également <strong>se former et être en veille</strong> permanente sur son domaine, afin de ne jamais se reposer sur ses acquis.</p>
            <p className="highlighted">Dans un monde qui change vite, il est facile de se laisser surprendre par sa propre obsolescence.</p>
            <p className="mt-4">Faire appel à un freelance vous assure donc de <strong>collaborer avec une personne compétente</strong>, qui, si elle ne débute pas, possède souvent plusieurs recommandations et références, et dont l'objectif est votre satisfaction !</p>
            <p className="mt-4">A contrario, et sans vouloir généraliser, le but premier d'un employé aura plutôt tendance à aller dans le sens de son propre intérêt, à travers la sécurité d'un emploi, l'assurance d'un salaire à la fin du mois et éventuellement la jouissance de quelques divertissements à son lieu de travail (qui a dit babyfoot ? 🤦‍♂️)</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">La bonne personne, au bon moment</h2>
        <div>
            <p>
                Une embauche intervient souvent dans le cadre d'une hausse de l'activité, ou d'un besoin particulier auquel vous n'êtes pas capable d'apporter de réponse en l'état.
                <br/>
                Mais pour que celle-ci s'avère être la bonne solution, <span className="underline">il est nécessaire que cette hausse ou ce besoin se perpétue</span>.
            </p>
            <p className="mt-4">L'intervention d'un freelance commence et se termine à <strong>des moments qui ont été réfléchis</strong>, pour <strong>des raisons définies à l'avance</strong>, et peut <strong>se prolonger à volonté</strong>.</p>
            <p className="mt-4">
                Il est là pour <strong>répondre à votre besoin</strong>, <strong>au moment précis où vous en avez besoin</strong>, et aura même été <strong>sélectionné spécifiquement pour sa capacité à le faire</strong> ! 💪
            </p>
            <p className="mt-4">Cela peut même être un moyen de s'assurer de la pertinence d'une embauche, en validant la continuité de ce besoin tout <strong>en maîtrisant les risques et les coûts</strong>.</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Comme vous, c'est un entrepreneur</h2>
        <div>
            <p>
                Comme je vous le disais au début, un freelance est de fait à son compte.
                <br/>
                Il <strong>gère une entreprise</strong>, et cela lui impose d'être <strong>pluri-disciplinaire</strong>.
            </p>
            <p className="mt-4">En dehors de ce que lui demande déjà son métier, il lui faut également <strong>développer des compétences</strong> en <mark>gestion de projet</mark>, en <mark>communication</mark>, en <mark>marketing</mark>, en <mark>comptabilité</mark>, en <mark>droit</mark>, etc ...</p>
            <p className="mt-4">Confronté aux mêmes difficultés et nécessités que n'importe quel autre chef d'entreprise, cela fait de lui <strong>quelqu'un qui comprend son client</strong>, là où la plupart des employés n'auront jamais aucune idée de ce que cela requiert réellement d'être patron.</p>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Tout dépend donc de vos besoins</h2>
        <div>
            <p>Un freelance n'est pas forcément toujours la solution la plus pertinente, mais <strong>c'est une ressource qu'il est intelligent de considérer</strong>, et que de plus en plus d'entreprises prennent <strong>en compte dans leurs stratégies</strong>.</p>
            <p className="mt-4">Ne laissez plus vos processus de recrutement impacter négativement votre développement, et pour quelques jours ou plusieurs mois, <strong>entourez-vous d'experts</strong>.</p>
            <p className="mt-4"><span className="highlighted">À l'image de votre projet, soyez scalable !</span> 🆙</p>
        </div>
        <div>
            <Link href="/contact">
                <button className="mt-8 text-white text-xl px-3 py-2 bg-corail rounded shadow-lg hover:shadow">Alors, quand est-ce qu'on attaque ? 🏗️</button>
            </Link>
        </div>
        <BackButton />
        <style jsx>{`
            
        `}</style>
    </Layout>
);

export default Freelance;
