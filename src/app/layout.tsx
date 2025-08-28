"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import InputFileUpload from './components/InputFileUpload';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#1a1a1a', color: 'white' }}>
        {/* NAVBAR */}
    <nav style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '31px 30px',
      backgroundColor: '#000000',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      gap: '72%',
      fontSize: '35px',
    }}>
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Calorie Counter</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>

        {/* UPPER HERO SECTION */}
        <section style={{
          position: 'relative',
          width: '100%',
          height: '50vh',
          backgroundImage: 'url(https://health-e.in/wp-content/uploads/2023/12/healthcare-concept-with-futuristic-design-graphics-medical-treatment-icons.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {/* Black overlay with opacity */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}></div>

          {/* Hero content */}
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '80px',
                margin: '0 0 20px 0',
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 1s ease-in-out',
                color: 'white',
              }}
            >
              Calorie Counter
            </h1>
            <p style={{ fontSize: '27px', margin: 0, color: 'white' }}>
              Being healthy is important because it boosts your energy, strengthens your immunity,
              improves your mood, and helps you live a longer, happier life.
            </p>
          </div>

          {/* Cement color bottom line */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '5px',
            backgroundColor: '#BEBEBE', // cement color
            zIndex: 3,
          }}></div>
        </section>
        {/* LOWER CONTENT SECTION WITH GRAPHS */}
<section style={{
  display: 'flex',
  justifyContent: 'space-around', // space between graphs
  alignItems: 'flex-start',
  flexWrap: 'wrap', // wrap on smaller screens
  width: '100%',
  padding: '50px 20px',
  backgroundColor: '#1f1f1f',
  color: 'white'
}}>
  {/* Graph 1 */}
  <div style={{ flex: '1 1 300px', margin: '20px', textAlign: 'center' }}>
    <div style={{
      width: '300px',
      height: '200px',
      backgroundColor: '#333',
      borderRadius: '10px',
      marginBottom: '15px',
    }}>
      {/* Replace this div with your actual chart component */}
      <p style={{ lineHeight: '200px', color: '#bbb' }}>Graph 1</p>
    </div>
    <p>Track your daily calorie intake to stay healthy and energetic.</p>
  </div>

  {/* Graph 2 */}
  <div style={{ flex: '1 1 300px', margin: '20px', textAlign: 'center' }}>
    <div style={{
      width: '300px',
      height: '200px',
      backgroundColor: '#333',
      borderRadius: '10px',
      marginBottom: '15px',
    }}>
      <p style={{ lineHeight: '200px', color: '#bbb' }}>Graph 2</p>
    </div>
    <p>Analyze your weekly nutrition patterns and maintain balance.</p>
  </div>

  {/* Graph 3 */}
  <div style={{ flex: '1 1 300px', margin: '20px', textAlign: 'center' }}>
    <div style={{
      width: '300px',
      height: '200px',
      backgroundColor: '#333',
      borderRadius: '10px',
      marginBottom: '15px',
    }}>
      <p style={{ lineHeight: '200px', color: '#bbb' }}>Graph 3</p>
    </div>
    <p>Monitor your monthly progress and set achievable health goals.</p>
  </div>
</section>


        {/* LOWER CONTENT SECTION */}
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          textAlign: 'center',
          paddingTop: '20px',
        }}>
          <div style={{ marginTop: '40px' }}>
            <InputFileUpload />
          </div>
          
        </main>

        {/* FOOTER */}
        <footer style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#333',
          marginTop: '50px'
        }}>
          &copy; 2025 Calorie Counter
        </footer>
      </body>
    </html>
  );
}
