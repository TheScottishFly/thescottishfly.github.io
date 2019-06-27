import Link from 'next/link';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton';
import NextSeo from 'next-seo';

const description = "Si mon profil semble pouvoir répondre à l'un de vos besoins, je serais ravi que l'on en discute ensemble, et que l'on voit si je suis à même de vous apporter une solution. Au plaisir de collaborer ensemble !";

const Contact = (props) => (
    <Layout>
        <NextSeo
            config={{
                title: "Me contacter",
                description: description
            }}
        />
        <p className="sm:mt-12 mt-0">
            <span className="first-letter">S</span>i vous êtes arrivé jusqu'ici, c'est qu'il est probable que vous ayez un besoin auquel je peux très certainement répondre.
            <br/>
            Je serais ravi que l'on en discute ensemble !
        </p>
        <h1 className="md:text-5xl text-4xl mt-12">Comment me contacter</h1>
        <div className="self-center lg:w-1/2 sm:w-2/3 w-5/6 md:my-24 my-12">
            <img src="/static/img/undraw_contact_us_15o2.svg" alt="Contact us"/>
        </div>
        <div className="flex flex-col items-center p-8 shadow-lg rounded">
            <a className="flex sm:flex-row flex-col items-center my-2 text-bluec hover-link" href="mailto:contact@gilianrosnet.fr" target="_blank">
                <img className="mr-2 min-w-12 w-12" alt="Mail" src="data:image/png;base64,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" />
                contact@rosnetgilian.fr
            </a>
            <a className="flex sm:flex-row flex-col items-center my-2 text-bluec hover-link" href="https://www.malt.fr/profile/gilianrosnetboutinet" target="_blank">
                <img src="/static/img/malt_picto_color_png.png" alt="Malt" className="mr-2 w-12 min-w-12" />
                gilianrosnetboutinet
            </a>
            <a className="flex sm:flex-row flex-col items-center my-2 text-bluec hover-link" href="https://www.linkedin.com/in/gilian-rosnet/" target="_blank">
                <img className="mr-2 w-12 min-w-12" alt="Linkedin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKISURBVGhD7Zk9axRRGIV3MljYaidYa+s/sLDx29I/4Y8QxZnFwohYaGGlCHa2QVT8qBScWTYSwQSigkrQwLoxidFc5yxHcic5Yd67rDsJzAMP2eV9OXOYvRvCpNXQ0NCws4nbnXNRmj+ZSPL+RJq7sVhcC9eM2/kZ1hiOKM1SeYExGiXZZdYJI07ysyqwDuMkO81adgbHRoTVYZTkj1nLzljPfJVJ1mMtOzKoRlnLjgqBh2/PuGcf+67/6497XvzEe7U3alnLjgqBKO/z9ENf7o1a1rKjQuBSced98EmovVHLWnZUCNzyCcz/kHujlrXsqBCIM4+zjzuP43Po1i77DtQla9lRIXXKWnZUCFRY5gdvvnXXXy246YVlt7y27hZXfrsXxVG8MPXJ7b3aKWUoWcuOCoGKqvmRO+/c16U1vtvK688/3YEb06WczbKWHRUCFVXz2cVVvtoe/DaLvZzNspYdFQIVVXMrxx/MlbJ8WcuOCoGKqvl64WRx/o/dn3XnH84P7rbibvd7KcuXteyoEKioml96+aW0s6fdcVNzPU43mPm2UtrzZS07KgQqqub7J7ulHXj03ntON+itbv9nCWvZUSFQETL/575rXU7LqF3IWnZUCFSEzH0Vag+ylh0VAhUhc1+F2oOsZUeFQEXI3Feh9iBr2VEhUBEy91WoPchadlQIVITMfRVqD7KWHRUCFSFzX4Xag6xlR4VARcjcV6H2IGvZUSFQETL3Vag9yFp2VAhUhMx9FWoPspYdFVKnrGVn1z9axANVGVaDQz3cxSNtFVaHcfLmJGuFgX8uqMBxGqX5RdYZjridnRocp+Icqgv8F4trFTfvUXylc4I1GhoaGnYkrdZftCOe5rpU+ZQAAAAASUVORK5CYII=" />
                gilian-rosnet
            </a>
            <a className="flex sm:flex-row flex-col items-center my-2 text-bluec hover-link" href="https://github.com/TheScottishFly" target="_blank">
                <img className="mr-2 w-12 min-w-12" alt="Github" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQeSURBVGhD7dpJqBRHHMfx546iuMVECW4gGohIYhBXElBBDIiIeBBFUGIU9KAHjZiLuByUGAwSESUHt4sgIsZ9B5fgmotGCSpRouISDYmKu9+f2FAU/+mZrunueUr/4HN484aq6n7dVf+ufnVFihQpUiQ+TdAWzd/89B5FBzQMi/Ar/sRTvHK8wDXswwqMhk7GOxUd5Dr8B/fgKqWTsgPjoKuh3mYMzsA6iFBXMQNNUW/SC/thDTgt5/EVap5v8RjWINP2Ej+gJpe5OtV9ag0sa8fQHrmlBXbCGkxe/kBXZB5NHppBrUHkTctcB2Sa9bA6r5XfkFkBMw1Wp5Gb0Fl/5nyWBk1Wf+GK85lrNVKPlp5HsDqM9IHSEpNxAdb3KnUDcxFdtq3xANZ3VQOkmnLr7HX4aYSFUPnofvcfXMRJaH29Df0V3e9shCZHP6XmD5WnOtGpRGfP6sR1DqUyAcvwNVrpAyPN8CUW4Ht9UCJxS6FObio5DasD11nkkbgDvo82qCp6ELAa991FHjkEq//IHFSVJMvQh8g6t2D1HdGcEBytb//DatiS+kzppQesfn2fIShDYTVouYyq758y0ax/BFb/Li1lQVkMq0GflpSByCMfo9xVtwtB2Q6rQd9W5JklsMYRUcUXFJWJVoO+Ecgz3WCNwxV0ez2B1ZhL5WYttl80G1vjifRGouggrIZ8l1CLbIM1nsgQJIoKdashn6qwWmQTrPFERiJRVIhbDfmsh4Y8on1sazyRoA2/57Aac+nZV1dDnmmAv2GNJ9IPiaOHbqsx33jkmb6wxuH6CIlzGFZjvhPQWc8rG2CNI/IvgrIcVoOWKcgjg+FvFvi0SRCUsbAatGjNVu2dZfTwoN0Rq3/XPARFk5H/ti/OQ3yDLKLdkkoOVqqq61WIW43G2Y1BSCOfQmtuucs4oom2MYKT5LL2nYL2pz5Hpe+DGuITzMJB+BuA5cxHVVGJaS1PeoH2I7T76P/OoltjD0q9E9Im3hqU2wqOo3nkA1QdawNeBzAKunx+evtZHD15dURctMNSyQN+KaltyOtytJ5OdEYHQGvwz28/s6ga+wKVpDO0b221E+cOUn2jqD1ja+I4DkXbL5vh/15+QZLMhtVOnEzqgKWwOusPRX9pnZip0IvySRiOpP+kou8nuZf1IJFJpacJ7AD8Dtci7eyF349Fz+OZPrzoPlEnbqf6b50uSDMr4fZhUSGi6ivzdILewLuda1IL3g82ovLQbd+nDflKJ8JUorcMR+EPRO+YtkATmITWtXEHrLW/O3KPioVViCv79B94ISl1wCpb26GmUWFfarMgrQPW/ToR9SaqklTH3oM70GoPWG8ZVNSkUjJmEb3wnonfoQHrEgzJdHyHml++SdITee93FSlSpEiRIu9O6upeA8qk2HnM8tAGAAAAAElFTkSuQmCC" />
                TheScottishFly
            </a>
        </div>
        <BackButton />
        <style jsx>{`
        
        `}</style>
    </Layout>
);

export default Contact;
