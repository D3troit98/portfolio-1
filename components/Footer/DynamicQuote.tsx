'use client';
import React, { useState, useEffect } from 'react';

const sandersonQuotes = [
    {
        quote: "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step.",
        book: "Words of Radiance (Stormlight Archive)"
    },
    {
        quote: "You don't get creativity by doing exactly what other people tell you to do.",
        book: "Writing Excuses Podcast"
    },
    {
        quote: "Expectations were like fine pottery. The harder you held them, the more likely they were to crack.",
        book: "The Way of Kings (Stormlight Archive)"
    },
    {
        quote: "I am a stick.",
        book: "Words of Radiance (Stormlight Archive)"
    },
    {
        quote: "Life before Death. Strength before Weakness. Journey before Destination.",
        book: "The Way of Kings (Stormlight Archive)"
    },
    {
        quote: "Sometimes a hypocrite is nothing more than a man in the process of changing.",
        book: "Oathbringer (Stormlight Archive)"
    },
    {
        quote: "You don't get to choose when you fail. You only get to choose how you respond to failure.",
        book: "Mistborn: The Final Empire"
    },
    {
        quote: "There's always another secret.",
        book: "Mistborn: The Well of Ascension"
    }
];

interface QuoteProps {
  interval?: number;
}

const DynamicQuote: React.FC<QuoteProps> = ({ interval = 5000 }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const blurTimer = setTimeout(() => {
      setIsBlurred(true);
    }, interval - 500); // Start blur before changing quote

    const quoteTimer = setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) =>
        (prevIndex + 1) % sandersonQuotes.length
      );
      setIsBlurred(false);
    }, interval);

    return () => {
      clearTimeout(blurTimer);
      clearTimeout(quoteTimer);
    };
  }, [currentQuoteIndex, interval]);

  const currentQuote = sandersonQuotes[currentQuoteIndex];

  return (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <blockquote
        className={`
          italic text-white/70 text-sm sm:text-base
          transition-all duration-500 ease-in-out
          ${isBlurred ? 'opacity-0 blur-md' : 'opacity-100 blur-none'}
        `}
      >
        &ldquo;{currentQuote.quote}&rdquo;
        <footer
          className={`
            text-white/50 text-xs mt-2
            transition-all duration-500 ease-in-out
            ${isBlurred ? 'opacity-0 blur-md' : 'opacity-100 blur-none'}
          `}
        >
          - {currentQuote.book}
        </footer>
      </blockquote>
    </div>
  );
};

export default DynamicQuote;
