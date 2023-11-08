import React from 'react';
 
const Footer = () => (
    <footer className="footer" >
        <div className='footer-div'>
            <div className='footer-links'>
                <div className="footer-link">
                    <a href=" " className="link link-offset-3 link-underline-opacity-5 link-underline-opacity-100-hover fw-light">Cart</a>
                    <a href=" " className="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-light">Shop</a>
                    <a href=" " className="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-light">Checkout</a>
                </div>
                <div className="footer-link">
                    <a href="https://www.facebook.com/" className="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-light">Facebook</a>
                    <a href="https://www.instagram.com/" className="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-light">Instagram</a>
                    <a href="https://twitter.com/?lang=en" className="link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-light">Twitter</a>
                </div>
            </div>
            <div className="copyright fw-light">
                <p>@ Copyright 2023.</p>
            </div>
        </div>
    </footer>
);
 
export default Footer;