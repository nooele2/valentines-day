import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, Mail } from 'lucide-react';
import './App.css';

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [heartsFloating, setHeartsFloating] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Generate floating hearts on mount
  useEffect(() => {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
    setHeartsFloating(hearts);
  }, []);

  // Auto-advance photo gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle "No" button hover - it moves away!
  const handleNoHover = () => {
    const newX = Math.random() * 60 - 30;
    const newY = Math.random() * 60 - 30;
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonAttempts(prev => prev + 1);
  };

  const getNoButtonText = () => {
    if (noButtonAttempts === 0) return "No";
    if (noButtonAttempts === 1) return "Are you sure?";
    if (noButtonAttempts === 2) return "Really??";
    if (noButtonAttempts === 3) return "Think again! 🥺";
    if (noButtonAttempts === 4) return "Please? 💔";
    return "You can't click me! 😊";
  };

  // ADD YOUR PHOTOS TO THE PROJECT:
  // 1. In your project, go to the "public" folder
  // 2. Create a new folder called "photos" inside public
  // 3. Put your 8 photos in that folder (rename them: photo1.jpg, photo2.jpg, etc.)
  // 4. The photos will automatically work!
  // 
  // Your folder structure should look like:
  // valentines-day/
  // └── public/
  //     └── photos/
  //         ├── photo1.jpg
  //         ├── photo2.jpg
  //         ├── photo3.jpg
  //         ├── photo4.jpg
  //         ├── photo5.jpg
  //         ├── photo6.jpg
  //         ├── photo7.jpg
  //         └── photo8.jpg
  
  const photos = [
    { url: '/photos/photo1.jpg', caption: 'First time selfie together' },
    { url: '/photos/photo2.jpg', caption: 'Ngr nae tuu tuu yite chin dl so p lr yite tr' },
    { url: '/photos/photo3.jpg', caption: 'Thu a tan twr htie tat tr' },
    { url: '/photos/photo4.jpg', caption: 'Last photo of being friends' },
    { url: '/photos/photo5.jpg', caption: 'Chit sayar lay' },
    { url: '/photos/photo6.jpg', caption: 'Churos wal p yee pya nay dr' },
    { url: '/photos/photo7.jpg', caption: 'Puchifa ka kalay lay' },
    { url: '/photos/photo8.jpg', caption: 'THE MIGHT LYDIA WITH FLOWERS' },
  ];

  const reasons = [
    "A Yan Chit Poh Kgg dl",
    "The way you eat everything I cook",
    "How you make every day feel special",
    "Your kindness and beautiful heart",
    "The way you understand me without words",
    "Every moment we share together",
    "How you inspire me to be better",
    "Your presence makes everything perfect"
  ];

  return (
    <div className="app-container">
      {/* Floating Hearts Background */}
      {heartsFloating.map((heart) => (
        <Heart
          key={heart.id}
          className="float-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
          fill="currentColor"
        />
      ))}

      {/* Proposal Screen */}
      {!hasAccepted ? (
        <div className="proposal-screen">
          <div className="proposal-content">
            <div className="heart-container">
              <Heart className="main-heart heartbeat" fill="currentColor" />
              <Sparkles className="sparkle sparkle-1" />
              <Sparkles className="sparkle sparkle-2" />
              <Sparkles className="sparkle sparkle-3" />
            </div>
            
            <h1 className="proposal-title">Will You Be My Valentine?</h1>
            <p className="proposal-subtitle">I have something special to show you...</p>
            
            <div className="button-container">
              <button onClick={() => setHasAccepted(true)} className="yes-button">
                Yes! 💕
              </button>
              
              <button
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="no-button"
                style={{
                  transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                }}
              >
                {getNoButtonText()}
              </button>
            </div>

            {noButtonAttempts > 0 && (
              <p className="no-message">
                {noButtonAttempts < 3 ? "Come on, you know you want to say yes! 😊" : "The only answer is YES! ❤️"}
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className="nav">
            <button
              onClick={() => setActiveSection('hero')}
              className={`nav-button ${activeSection === 'hero' ? 'active' : ''}`}
            >
              <Heart className="nav-icon" />
              Home
            </button>
            <button
              onClick={() => setActiveSection('letter')}
              className={`nav-button ${activeSection === 'letter' ? 'active' : ''}`}
            >
              <Mail className="nav-icon" />
              Letter
            </button>
            <button
              onClick={() => setActiveSection('memories')}
              className={`nav-button ${activeSection === 'memories' ? 'active' : ''}`}
            >
              <Camera className="nav-icon" />
              Memories
            </button>
          </nav>

          {/* Hero Section */}
          {activeSection === 'hero' && (
            <div className="section">
              <div className="hero-content">
                <div className="heart-container">
                  <Heart className="main-heart pulse-heart" fill="currentColor" />
                  <Sparkles className="sparkle sparkle-1" />
                  <Sparkles className="sparkle sparkle-2" />
                </div>
                
                <h1 className="hero-title">Happy Valentine's Day</h1>
                <p className="hero-subtitle">To the love of my life</p>
                
                <div className="quote-box">
                  <p className="quote-text">
                    "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails."
                  </p>
                  <p className="quote-text">
                    1 Corinthians 13:4-8
                  </p>
                </div>

                <button onClick={() => setActiveSection('letter')} className="cta-button">
                  Read My Letter ❤️
                </button>
              </div>
            </div>
          )}

          {/* Love Letter Section */}
          {activeSection === 'letter' && (
            <div className="section">
              <div className="letter-container">
                <div className="letter-content">
                  <div className="letter-header">
                    <Heart className="letter-heart" fill="currentColor" />
                    <h2 className="letter-title">My Dearest Love</h2>
                    <p className="letter-date">February 14, 2026</p>
                  </div>
                  
                  <div className="letter-body">
                    <p className="letter-paragraph first-paragraph">
                      Every moment with you feels like a beautiful dream I never want to wake up from. 
                      You've brought so much joy, laughter, and love into my life, and I'm eternally grateful 
                      for every second we share together.
                    </p>
                    
                    <p className="letter-paragraph">
                      Your smile brightens my darkest days, your laugh is my favorite melody, and your presence 
                      is my greatest comfort. You are beautiful everyday. Berry Pretty Na...
                    </p>
                    
                    <p className="letter-paragraph">
                      I cherish every single moment we spend together. Teaching you how to swim and watching your 
                      confidence grow in the water. Every shared laugh, every quiet moment, every adventure they all mean the world to me.
                    </p>
                    
                    <p className="letter-paragraph">
                      We started as friends, and I still can't believe how lucky I am that we became lovers. 
                      The fact that we built our relationship on friendship makes it even more special and real. 
                      I love the way you understand me without words, how you inspires me, and how you make me 
                      want to be a better person every single day.
                    </p>
                    
                    <p className="reasons-title">Here's why I love you...</p>
                    
                    <div className="reasons-grid">
                      {reasons.map((reason, index) => (
                        <div key={index} className="reason-card">
                          <Heart className="reason-heart" fill="currentColor" />
                          <p>{reason}</p>
                        </div>
                      ))}
                    </div>
                    
                    <p className="letter-closing">
                      Thank you for being you. Thank you for being mine.
                    </p>
                    
                    <p className="letter-love">
                      I love you more than words can express.
                    </p>
                    
                    <p className="letter-signature">
                      Yours,<br/>
                      <span className="heart-emoji">Pookie ❤️</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Memories Section */}
          {activeSection === 'memories' && (
            <div className="section">
              <div className="memories-content">
                <div className="memories-header">
                  <h2 className="memories-title">Our Beautiful Moments</h2>
                  <p className="memories-subtitle">Memories that make my heart smile</p>
                </div>

                <div className="photo-display">
                  <div className="photo-frame">
                    <img
                      src={photos[currentPhotoIndex].url}
                      alt={photos[currentPhotoIndex].caption}
                      className="main-photo"
                    />
                    <div className="photo-caption">
                      <p>{photos[currentPhotoIndex].caption}</p>
                    </div>
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    className="photo-nav-button photo-nav-left"
                    onClick={() => setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                  >
                    ‹
                  </button>
                  <button 
                    className="photo-nav-button photo-nav-right"
                    onClick={() => setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)}
                  >
                    ›
                  </button>
                </div>

                {/* Thumbnails - click to view */}
                <div className="thumbnails">
                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`thumbnail ${currentPhotoIndex === index ? 'active' : ''}`}
                    >
                      <img src={photo.url} alt={photo.caption} />
                    </button>
                  ))}
                </div>

                {/* Photo counter */}
                <div className="photo-counter">
                  <p>{currentPhotoIndex + 1} / {photos.length}</p>
                </div>
              </div>
            </div>
          )}

        </>
      )}
    </div>
  );
}

export default App;