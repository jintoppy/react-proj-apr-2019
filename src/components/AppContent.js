import React, { Component } from 'react';
import Movie from './Movie';
import Director from './Director';


const avatar = {
    title: 'Avatar'
};

class AppContent extends Component {
     state = {
        movieData: {
            title: 'Robo'
        },
        directorData: {
            name: 'Shankar',
            movies: 50
        }
    }
    
    onBtnClick = (movieData) => {
        this.setState({
            movieData
        });
    }

    render() {

        const trItems = this.props.data.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
            )
        });
        return (
            <div>
                <button onClick={() => {
                    const movieData = {
                        title: 'Movie 1'
                    };
                    this.onBtnClick(movieData);
                }}>Click me</button>  
                <button onClick={() => {
                    const movieData = {
                        title: 'Movie 2'
                    };
                    this.onBtnClick(movieData);
                }}>Click me1</button>  
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trItems}
                    </tbody>
                </table>
                <Director details={this.state.directorData} />
                <Movie data={this.state.movieData} />
                <Movie data={avatar} />
            </div>
        )
    }
    
};

export default AppContent;