

const ListGroup = (props) => {
    const {items, valueProperty, textProperty, onGenreSelect, selectedItem } = props;
    return ( 
        
        <ul className="list-group">
            {items.map(item => 
            <li key={item[valueProperty]} 
                className={item === selectedItem? "clickable list-group-item active": "clickable list-group-item"} 
                onClick={() => onGenreSelect(item)}>
            {item[textProperty]}
            </li>)}
            
        </ul>
        
     );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}

 
export default ListGroup;