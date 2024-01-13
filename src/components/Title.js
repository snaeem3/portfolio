import React, { useState, useEffect } from 'react';

const Title = () => {
  const initialText = 'Mechanical Engineer';
  const pauseMs = 2500;
  const finalText = 'Software Engineer';
  const typingSpeedMs = 125;
  const deleteSpeedMs = 50; // Lower is faster

  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialTextComplete, setInitialTextComplete] = useState(false);
  const [finalTextBegin, setFinalTextBegin] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Initial Text Typing Effect
  useEffect(() => {
    if (!initialTextComplete && currentIndex < initialText.length) {
      const typingTimeout = setTimeout(() => {
        setVisibleText(initialText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeedMs);
      return () => clearTimeout(typingTimeout);
    }
    // setIsTyping(false);
    const delayTimeOut = setTimeout(
      () => setInitialTextComplete(true),
      pauseMs
    );
    return () => clearTimeout(delayTimeOut);
  }, [initialTextComplete, currentIndex, initialText]);

  // Initial Text Deletion Effect
  useEffect(() => {
    if (initialTextComplete && currentIndex >= 0 && !finalTextBegin) {
      const typingTimeout = setTimeout(() => {
        setVisibleText(initialText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deleteSpeedMs);

      if (currentIndex === 0) {
        setFinalTextBegin(true);
      }
      return () => clearTimeout(typingTimeout);
    }
    // setIsTyping(false);
  }, [initialTextComplete, currentIndex, initialText, finalTextBegin]);

  // Final Text Typing Effect
  useEffect(() => {
    if (finalTextBegin && currentIndex < finalText.length) {
      const typingTimeout = setTimeout(() => {
        setVisibleText(finalText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeedMs); // Adjust the typing speed here
      return () => clearTimeout(typingTimeout);
    }
    // setIsTyping(false);
  }, [initialTextComplete, currentIndex, finalText, finalTextBegin]);

  return (
    <div className="title-container">
      <h1 className="name">Sameer Naeem</h1>
      <p className="position-name typing-effect">
        {visibleText} <span className="blinking-cursor">|</span>
      </p>
    </div>
  );
};

export default Title;
