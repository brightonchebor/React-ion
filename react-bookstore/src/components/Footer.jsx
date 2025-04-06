
const Footer = () => {

    const footerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        margin: '0',
        };
    return(
        <div>
            <p style={footerStyle}>
                This is Footer
            </p>
        </div>
    );
}

export default Footer