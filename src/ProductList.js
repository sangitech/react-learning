import React, { useState } from "react"; 
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import CardGrid from "./components/CardGrid";
import CardList from "./components/CardList";
import Pagination from 'rc-pagination';

function ProductList() {
const [selectedCategory, setSelectedCategory] = useState(null);

const [perPage, setPerPage] = useState(6);
const [size, setSize] = useState(perPage);
const [current, setCurrent] = useState(1);

const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(products.length / value);
    if (current > newPerPage) {
        setCurrent(newPerPage);
    }
}

const PaginationChange = (page, pageSize) => {
  setCurrent(page);
  setSize(pageSize)
}

const PrevNextArrow = (current, type, originalElement) => {
  if (type === 'prev') {
      return <button><i className="fa fa-angle-double-left"></i></button>;
  }
  if (type === 'next') {
      return <button><i className="fa fa-angle-double-right"></i></button>;
  }
  return originalElement;
}

const [grid_view, setView] = useState("grid");

// ----------- Input Filter -----------
const [query, setQuery] = useState("");

const handleInputChange = (event) => {

  setQuery(event.target.value);
};

const filteredItems = products.filter(
  (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);


// ------------ Button Filtering -----------
const handleClick = (event) => {
  console.log("filter =", event.target.value)
  setSelectedCategory(event.target.value);
}; 

const setLayoutView = (event, val) => {
  if (val === 'grid') {
    setView('grid');
  }else {
    setView('list');
  }
}; 


function filteredData(products, selected, query) {
  let filteredProducts = products;

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems;
  }

  // Applying selected filter
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ company }) =>
        company === selected
    );
  } 

  filteredProducts = filteredProducts.slice((current - 1) * size, current * size);

  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice, id }) => (
        <>
      {
        (grid_view === 'grid') ? 
      <CardGrid
        key={Math.random()}
        id={id}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
      :
      <CardList
      key={Math.random()}
      id={id}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    />
    }
    </>
    )
  );
}

const result = filteredData(products, selectedCategory, query);
 
return (
  
  <section className="container">  
 
          <Recommended handleClick={handleClick} query={query} handleInputChange={handleInputChange} setLayoutView={setLayoutView}/>
          <Products result={result} />
          <Pagination
            className="pagination-data"
            showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
            onChange={PaginationChange}
            total={products.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
        /> 
  </section>
);
}
export default ProductList;