import React, { useState, useEffect } from 'react'

const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);
    
    useEffect(() => {
        let timeoutId = null;
        
        const handleScroll = () => {
            // Clear the timeout if it has been set
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            
            // Set a timeout to run after scrolling stops
            timeoutId = setTimeout(() => {
                const scrolledToBottom = 
                    window.innerHeight + window.scrollY >= document.body.offsetHeight - 20;
                
                setShowFooter(scrolledToBottom);
            }, 100); // 100ms delay
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);
    
    const footerStyle = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.3s ease-in-out',
        transform: showFooter ? 'translateY(0)' : 'translateY(100%)',
        zIndex: 1000, // Ensure it appears above other content
    };
    
    return (
        <div style={footerStyle}>
            <p style={{ margin: 0, fontSize: '15px' }}>
                All rights reserved 2025
            </p>
        </div>
    );
}

export default Footer