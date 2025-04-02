
const Welcome = ({logedIn}) => {
    let header;
    if (logedIn) {
        header = <Header />
    } else{
        header = <Login />
    }
    return(
        <div>
            {header}
        </div>
    );
}

export default Welcome