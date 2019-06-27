import Router from 'next/router';

const BackButton = (props) => (
    <div className="mt-12 pl-4">
        <a className="hover-link text-lg text-tealc cursor-pointer" onClick={() => Router.back()}>&#8592; Retour à la page précédente</a>
        <style jsx>{`
            
        `}</style>
    </div>
);

export default BackButton;
