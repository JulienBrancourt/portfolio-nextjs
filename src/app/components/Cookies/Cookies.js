"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import './Cookies.css'

const Cookies = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      setShowNotice(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowNotice(false);
  };

  return (
    <>
      {showNotice && (
        <div className="cookie-notif">
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur.
            <button onClick={acceptCookies}>J'accepte</button>
          </p>
        </div>
      )}
    </>
  );
}

export default Cookies