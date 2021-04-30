import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Like from './like';
import Table from './common/table';

class MoviesTable extends Component {
    columns = [
        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'Like', label:'Like', content: movie => (<Like likeStatus={movie.liked} onlike={()=>this.props.onLike(movie)}/>)},
        {key: 'Action', label:'Action', content: movie => (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>)}
    ]
    render() { 
        const {movies, onDelete, onLike, sortColumn, onSort} = this.props;
        return ( 
            <Table 
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
         );
    }
}
 
export default MoviesTable;

// const MoviesTable = (props) => {
//     const {movies, onLike, onDelete, onSort} = props;
//     return ( 
        // <table className="table">
        //     <thead>
        //         <tr>
        //             <th onClick={()=>onSort('title')}>Title</th>
        //             <th onClick={()=>onSort('genre.name')}>Genre</th>
        //             <th onClick={()=>onSort('numberInStock')}>Stock</th>
        //             <th onClick={()=>onSort('dailyRentalRate')}>Rate</th>
        //             <th>Like</th>
        //             <th>Actions</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {movies.map(movie => (
        //             <tr key={movie._id}>
        //             <td>{movie.title}</td>
        //             <td>{movie.genre.name}</td>
        //             <td>{movie.numberInStock}</td>
        //             <td>{movie.dailyRentalRate}</td>
        //             <td>
        //                 <Like 
        //                     likeStatus={movie.liked} 
        //                     onLike={()=> 
        //                     onLike(movie)} 
        //                 />
        //             </td>
        //             <td>
        //                 <button 
        //                     onClick={()=>onDelete(movie)} 
        //                     className="btn btn-danger btn-sm">
        //                         Delete
        //                 </button>
        //             </td>
        //         </tr>
        //         ))}
                
        //     </tbody>
        // </table>
//      );
// }
 
// export default MoviesTable;