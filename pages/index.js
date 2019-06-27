import Link from 'next/link';
import Layout from '../components/Layout';

const Index = (props) => (
    <Layout>
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">H</span>ello !
            <br/>
            Je suis Gilian 😃
        </p>
        <p className="mt-4"><mark>Développeur indépendant</mark> et <strong>Entrepreneur</strong>, basé à Lyon, j'accompagne des <strong>startups</strong> et des <strong>porteur-se-s de projets</strong> dans le <strong>développement</strong> et le <strong>lancement</strong> de leurs <strong>projets web</strong>.</p>
        <p></p>
        <h1 className="md:text-5xl text-4xl my-12">Freelance pour projets (très) early stage</h1>
        <div>
            <blockquote>
                “Mais oui c'est clair !”
            </blockquote>
            <p className="mt-2 w-full italic text-sm md:text-center text-right">
                Un grand sage d'Internet 🧠
            </p>
        </div>
        <div className="self-center lg:w-1/2 sm:w-2/3 w-5/6 my-24">
            <img src="/static/img/undraw_code_typing_7jnv.svg" alt="Code typing"/>
        </div>
        <div>
            <p><span className="highlighted">J'aime tout particulièrement</span> collaborer sur des projets qui n'en sont qu'à leurs débuts, où (presque) tout est encore à faire !</p>
            <p className="mt-4">Passer d'une idée à un <strong>projet tangible</strong>, de quelques traits sur un cahier à la <strong>réalisation d'une vision</strong> (qui aura pris, au passage, quelques virages), de 15 post-its (virtuels, of course 🌲) à un <strong>prototype</strong> parfaitement fonctionnel ... </p>
            <p className="mt-4">Voilà les choses qui me font <span className="highlighted">vibrer</span> au quotidien dans mon travail, et qui me font l'adorer.</p>
            <p>Raison pour laquelle je ne me concentre <span className="font-bold">QUE</span> sur ce type de projet !</p>
            <div className="flex flex-col ml-8 my-4">
                <Link href="/articles/travailler-avec-freelance-avantages">
                    <a className="flex flex-row items-center justify-between text-bluec text-lg shadow-lg hover:shadow p-4">
                        <span>Travailler avec un freelance, quels avantages ?</span>
                        <span>&#8594;</span>
                    </a>
                </Link>
            </div>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Concrètement, ce que je fais</h2>
        <div>
            <p>Je ..</p>
            <div className="ml-8">
                <p>.. Collabore <strong>à distance</strong>, et accepte <span className="highlighted">avec plaisir</span> de travailler en présentiel à vos côtés 20% du temps, <span className="underline">à condition que vous soyez sur Lyon</span> 🦁</p>
                <p>.. Vous apporte mon <strong>expertise</strong>, et mets ma <span className="highlighted">passion</span> à votre service, pour vous aider à avoir une vision technique <strong>réaliste</strong>, <strong>pertinente</strong> et <strong>scalable</strong>.</p>
                <p>.. Vous accompagne pour <strong>donner vie</strong> à vos idées, ou <strong>faire progresser</strong> vos projets, selon le stade où vous en êtes.</p>
            </div>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold my-12">Et techniquement parlant ?</h2>
        <div>
            <p>Et bien, je ..</p>
            <div className="ml-8">
                <p>.. 01100011 01101111 01100100 01100101 00100000 01100001 01110110 01100101 01100011 00100000 01101100 01100101 01110011 00100000 01110000 01101001 01100101 01100100 01110011 😁</p>
            </div>
            <p className="mt-4">Plus sérieusement, je <mark>suis Fullstack</mark>, cela signifie que je suis apte à intervenir sur <span className="font-bold">l'ensemble du projet</span>, que ce soit la partie Back-End (serveur) ou la partie Front-End (client).</p>
            <p className="mt-4">En plus de cela, je maîtrise Linux, ainsi que Docker, et sans être un SysAdmin/DevOps émérite, je suis <span className="font-bold">parfaitement capable</span> de déployer et maintenir un site dans un environnement <span className="font-bold">adapté</span> et <span className="font-bold">sécurisé</span>.</p>
            <p className="mt-4">Et parce que je souhaite être le <mark>freelance le plus complet possible</mark>, et me <span className="font-bold">forme continuellement</span> en ce sens, j'ai suivi de multiples formations et cours sur <strong>le Design</strong>, <strong>l'UI/UX</strong>, <strong>l'entrepreneuriat</strong>, la <strong>gestion de projet</strong>, le <strong>référencement</strong>, ...</p>
            <p className="mt-8">Côté langages et frameworks, j'utilise essentiellement <strong>Python</strong>, <strong>Django</strong>, <strong>Javascript</strong>, <strong>Node.js</strong>, <strong>React.js</strong> (avec Next.js), parfois <strong>Vue.js</strong> (avec Nuxt.js) ou <strong>Wordpress</strong>, et évidemment <strong>HTML</strong> et <strong>CSS</strong>.</p>
            <div className="flex flex-col ml-8 my-4">
                <Link href="/articles/django-quesako">
                    <a className="flex flex-row items-center justify-between text-bluec text-lg rounded shadow-lg hover:shadow p-4">
                        <span>Django, quésako ?</span>
                        <span>&#8594;</span>
                    </a>
                </Link>
                <Link href="#">
                    <a className="hidden flex flex-row items-center justify-between text-bluec text-lg rounded shadow-lg hover:shadow p-4">
                        <span>Node.js, React.js, Vue.js, MachinChose.js, ...(js)</span>
                        <span>&#8594;</span>
                    </a>
                </Link>
                <Link href="#">
                    <a className="hidden flex flex-row items-center justify-between text-bluec text-lg rounded shadow-lg hover:shadow p-4">
                        <span>Pourquoi Wordpress est parfois la meilleure solution ?</span>
                        <span>&#8594;</span>
                    </a>
                </Link>
            </div>
            <p className="mt-12">Le type de projet en lui-même est très rarement limitant ..</p>
            <div className="ml-8">
                <p>.. POC (Preuve de concept)</p>
                <p>.. Prototype (fast and well 🔥)</p>
                <p>.. E-Commerce</p>
                <p>.. Plateforme complexe</p>
                <p>.. API</p>
                <p>.. Blog (ne négligez pas l'inbound marketing)</p>
                <p>.. Globalement, tous les genres de sites internet, tant qu'ils vous permettent de développer votre business de manière bénéfique.</p>
            </div>
            <p className="mt-4">De quoi <strong>répondre</strong> à la majorité de <strong>vos besoins</strong> ! 😉</p>
        </div>
        <div>
            <Link href="/contact">
                <button className="mt-8 text-white text-xl px-3 py-2 bg-corail rounded shadow-lg hover:shadow">On en discute ? 💬</button>
            </Link>
        </div>
        <style jsx>{`

        `}</style>
    </Layout>
);

export default Index;
