import './CTA.css'

type CTAProps = {
    texte: string;
};

const CTA = ({ texte }: CTAProps) => {
    return (
        <div className="cta">
            {texte}
        </div>
    );
};

const Special_CTA = ({ texte }: CTAProps) => {
    return (
        <div className="cta cta--special">
            {texte}
        </div>
    );
};

export {CTA, Special_CTA};
