import React, { useMemo } from 'react';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName'; 

export const SearchScreen = ({ history }) => {

    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);
    
    const [ formValues, handleInputChange] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);
    
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input
                            className="form-control"
                            type="text"
                            value={ searchText }
                            onChange= { handleInputChange }
                            placeholder="Find your hero"
                            name="searchText"
                            autoComplete='off'
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero }
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
