import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);

    if (!hero) {
        return <Redirect to='/' />
    }


    const handleReturn = () => {
        history.length <= 2 ? history.push('/') : history.goBack();
    }

    const {
        superhero,
        alter_ego,
        characters,
        first_appearance,
        publisher
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/heroes/${ heroId }.jpg` }
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__backInDown"/>
            </div>

            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:</b> { first_appearance }
                    </li>
                </ul>

                <h5>characters</h5>
                <p> { characters } </p>

                <button className="btn btn-outline-info" onClick={ handleReturn }>
                    Return
                </button>
            </div>
        </div>
    )
}
