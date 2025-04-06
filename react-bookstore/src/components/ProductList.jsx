const ProductList = ({title, author, year, lang, pages, price}) => {

    return(
        <div>
            <img src="" alt="Image of a book" />
            <h3>Title: {title}</h3>
            <p>Published: {year}</p>
            <p>language: {lang}</p>
            <p>Pages: {pages}</p>
            <p>Price: Kes {price}</p>
        </div>
    );
}

export default ProductList;