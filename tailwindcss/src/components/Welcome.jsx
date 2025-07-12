import Header from "./Header";
import Login from "./Login";

// conditional renedering with the element variables
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


// constional rendering with the conditional operator
const Karibu = ({loggedIn}) => {
    return(
        <div>
            {loggedIn ? <Header /> : <login />}
        </div>
    );
}

