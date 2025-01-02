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

export default CTA;
