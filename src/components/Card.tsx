import React from 'react';
import Kenya from 'src/assets/images/kenya.png';
import { ICountries } from 'src/redux/types';
// DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface ICardsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    customClasses?: string;
    country: ICountries;
}

const Card = (props: ICardsProps): JSX.Element => {
    const { customClasses, country, ...rest } = props;
    return (
        <div className={`rounded-md shadow-lg bg-white h-full overflow-hidden ${customClasses}`} {...rest}>
            <div className=" w-full md:h-60  overflow-hidden">
                <img style={{ objectFit: 'cover' }} className="w-full" src={country.flag} />
            </div>
            <div className="p-4">
                <h4 className="font-bold">{country.name}</h4>
                <p>Population:{country.population} </p>
            </div>
        </div>
    );
};
export default Card;
