import React from "react";
import '../assets/components/Filter.scss';

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: 'movie',
        }
    }

    changeTypeHandler = (name) => {
        this.props.filterMovies(name);
        this.setState({
            type: name,
        })
    }
    render() {
        const {type} = this.state;
        return (
            <div className="search-movies-filter col s6 row">
                <div className="col s4">
                    <label>
                        <input
                            name="type-movies"
                            type="radio"
                            checked={type === 'all'}
                            onChange={() => {this.changeTypeHandler('all')}} />
                        <span>All</span>
                    </label>
                </div>
                <div className="col s4">
                    <label>
                        <input
                            name="type-movies"
                            type="radio"
                            checked={type === 'movie'}
                            onChange={() => {this.changeTypeHandler('movie')}} />
                        <span>Movies only</span>
                    </label>
                </div>
                <div className="col s4">
                    <label>
                        <input
                            name="type-movies"
                            type="radio"
                            checked={type === 'series'}
                            onChange={() => {this.changeTypeHandler('series')}}/>
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Filter;