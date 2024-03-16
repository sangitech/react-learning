import "./Recommended.css";
import { BsFillGridFill, BsList } from "react-icons/bs"; 

const Recommended = ({ handleClick, handleInputChange, query, setLayoutView }) => {
return (
<>
<div className="recommended">
  <div className="row mb-5">    
    <div className="col-lg-3">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="offset-lg-4 col-lg-3 text-right"> 
        <form action="#">
          <select className="recommended-flex" name="cars" onClick={handleClick} >
            <option value="">All Products</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Vans">Vans</option>
          </select>
        </form>
      </div>
      <div className="col-lg-2"> 
        <div className="sorting-list--grid text-right">
          <button 
            onClick={event => setLayoutView(event, 'grid')}>
            <BsFillGridFill className="icon" />
          </button>

          <button 
            onClick={event => setLayoutView(event, 'list')}>
            <BsList className="icon" />
          </button>
        </div>      
      </div>
    </div>
  </div>
</>
);
};


export default Recommended;
