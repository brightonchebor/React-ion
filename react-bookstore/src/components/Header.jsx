const Header = () => {

    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
    };

    return(
        <div >
            <p style={headerStyle}>
                This is header
            </p>
        </div>
    );
}