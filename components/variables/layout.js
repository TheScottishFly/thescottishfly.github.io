const DEFAULT_SEO = {
    viewport: 'width=device-width,initial-scale=1.0',
    canonical: 'https://www.gilianrosnet.fr',
    title: 'Freelance pour projets (très) early stage',
    titleTemplate: "%s · Gilian Rosnet",
    description: "Start-up early stage ? Porteur-se de projet-s ? Développeur freelance et entrepreneur, je mets ma passion et mon expertise à votre service pour vous aider à atteindre vos objectifs plus rapidement !",
};

const burgerStyle = {
    bmBurgerButton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        left: '36px',
        top: '66px'
    },
    bmBurgerBars: {
        background: '#065471',
        borderRadius: '3px'
    },
    bmCrossButton: {
        height: '32px',
        width: '32px'
    },
    bmCross: {
        background: '#065471'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#F8B75D',
        fontSize: '1.15em',
        width: '100%',
        height: '100%',
        paddingTop: '33vh',
        textAlign: 'center'
    },
    bmMorphShape: {
        fill: '#F8B75D'
    },
    bmItemList: {
        color: '#065471',
        display: 'flex',
        flexDirection: 'column'
    },
    bmItem: {
        display: 'block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

export {DEFAULT_SEO, burgerStyle};
