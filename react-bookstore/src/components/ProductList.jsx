const ProductList = ({title}, {author}, {year}, {lang}, {pages}, {price}) => {

    return(
        <div>
            <img src="" alt="Image of a book" />
            <br />
            <h3>Title:{title}</h3>
            <br />
            <p>Published: {year}</p>

        </div>
    );
}

export default ProductList;