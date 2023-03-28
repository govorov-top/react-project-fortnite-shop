import '../assets/components/Search.scss';
import Filter from "./Filter";
import {useState} from "react";

function Search ({searchMovies}){
    const [search,setSearch] = useState('marvel');
    const [type,setType] = useState('all');

    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.preventDefault();
            searchMovies(search,type);
        }
    }

    const filterMoviesHandler = (name) => {
        setType(name);
        searchMovies(search, name);
    }
 
    return (
        <>
            <div className="row">
                <form className="col s12">
                    <div className="row valign-wrapper">
                        <div className="search-movies-input input-field col s6">
                            <i className="material-icons prefix"
                               onClick={() => searchMovies(search,type)}
                            >search</i>
                            <input
                                id="search_movies"
                                type="search"
                                className="validate"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onKeyDown={keyHandler}
                            />
                            <label htmlFor="search_movies">Search movies</label>
                        </div>
                        <Filter filterMovies={filterMoviesHandler}/>
                    </div>
                </form>
            </div>
        </>
    );

}

export default Search;