import React from 'react';
import Kenya from 'src/assets/images/kenya.png';
// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface ICardsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    customClasses?: string;
}

const Card = (props: ICardsProps): JSX.Element => {
    const { customClasses, ...rest } = props;
    return (
        <div className={`rounded shadow-lg bg-white h-full ${customClasses}`} {...rest}>
            <div className="w-full h-60 overflow-hidden">
                <img style={{ objectFit: 'cover' }} className="w-full" src={Kenya} />
            </div>
            <div className="p-4">
                <h4 className="font-bold">Germany</h4>
                <p>Population: </p>
            </div>
        </div>
    );
};
export default Card;
