"use client";
import React, { ReactNode, useEffect, useState } from "react";

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
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
      >
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "31px 30px",
            backgroundColor: "#000000",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            gap: "72%",
            fontSize: "35px",
          }}
        >
          <div style={{ fontSize: "30px", fontWeight: "bold" }}>Calorie Counter</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>About</a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section
          style={{
            position: "relative",
            width: "100%",
            height: "50vh",
            backgroundImage:
              "url(https://health-e.in/wp-content/uploads/2023/12/healthcare-concept-with-futuristic-design-graphics-medical-treatment-icons.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1,
            }}
          ></div>

          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <h1
              style={{
                fontSize: "80px",
                margin: "0 0 20px 0",
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? "translateY(0)" : "translateY(-20px)",
                transition: "all 1s ease-in-out",
                color: "white",
              }}
            >
              Calorie Counter
            </h1>
            <p style={{ fontSize: "27px", margin: 0, color: "white" }}>
              Being healthy is important because it boosts your energy, strengthens your immunity,
              improves your mood, and helps you live a longer, happier life.
            </p>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "5px",
              backgroundColor: "#BEBEBE",
              zIndex: 3,
            }}
          ></div>
        </section>

        {/* MAIN CONTENT */}
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          {/* AI Upload & Analyze Box */}
          <div
            style={{
              maxWidth: "50%",
              width: "50%",
              backgroundColor: "black",
              color: "white",
              borderRadius: "15px",
              padding: "30px 20px",
              boxShadow: "rgb(187 167 167 / 30%) 0px 10px 25px",
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s ease-in-out, transform 0.6s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Upload & Analyze Meal</h2>

            <input
              type="file"
              accept="image/*"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#4f46e5",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#4338ca")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#4f46e5")
              }
            >
              Analyze
            </button>

            <div style={{ color: "#555", fontSize: "14px" }}>Status: Waiting for file upload...</div>
          </div>

         </main>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#333",
            marginTop: "50px",
          }}
        >
          &copy; 2025 Calorie Counter
        </footer>
      </body>
    </html>
  );
}
