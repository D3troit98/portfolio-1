'use client';
import React, { useState, useEffect } from 'react';

const sandersonQuotes = [
  {
    quote:
      "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step.",
    book: 'Words of Radiance (Stormlight Archive)',
  },
  {
    quote:
      "You don't get creativity by doing exactly what other people tell you to do.",
    book: 'Writing Excuses Podcast',
  },
  {
    quote:
      'Expectations were like fine pottery. The harder you held them, the more likely they were to crack.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote: 'I am a stick.',
    book: 'Words of Radiance (Stormlight Archive)',
  },
  {
    quote:
      'Life before Death. Strength before Weakness. Journey before Destination.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote:
      'Sometimes a hypocrite is nothing more than a man in the process of changing.',
    book: 'Oathbringer (Stormlight Archive)',
  },
  {
    quote:
      "You don't get to choose when you fail. You only get to choose how you respond to failure.",
    book: 'Mistborn: The Final Empire',
  },
  {
    quote: "There's always another secret.",
    book: 'Mistborn: The Well of Ascension',
  },
  {
    quote: 'What is the most important step a man can take? The next one.',
    book: 'Oathbringer (Stormlight Archive)',
  },
  {
    quote:
      'The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote:
      'Strength does not make one capable of rule; it makes one capable of service.',
    book: 'Words of Radiance (Stormlight Archive)',
  },
  {
    quote:
      'A man’s emotions are what define him, control is the hallmark of true strength.',
    book: 'Mistborn: The Final Empire',
  },
  {
    quote: 'Sometimes, all you have to do is outlast the competition.',
    book: 'Warbreaker',
  },
  {
    quote:
      'A man can only stumble for so long before he either falls or stands up straight.',
    book: 'The Hero of Ages (Mistborn)',
  },
  {
    quote:
      'You tried to change the world, and failed. So you set out to change a man, and you succeeded.',
    book: 'The Hero of Ages (Mistborn)',
  },
  {
    quote:
      'To lack feeling is to be dead, but to act on every feeling is to be a child.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote: 'Sometimes our own limitations become self-imposed.',
    book: 'Elantris',
  },
  {
    quote:
      'A journey will have pain and failure. It is not only the steps forward that we must accept. It is the stumbles... the trials that teach us the most.',
    book: 'Oathbringer (Stormlight Archive)',
  },
  {
    quote:
      'We are not creatures of destinations. It is the journey that shapes us.',
    book: 'Oathbringer (Stormlight Archive)',
  },
  {
    quote:
      'Passion is never enough; we must act upon those passions with wisdom and truth.',
    book: 'Rhythm of War (Stormlight Archive)',
  },
  {
    quote: "A story doesn't live until it is imagined in someone’s mind.",
    book: 'The Alloy of Law (Mistborn)',
  },
  {
    quote:
      'It’s easy to believe in something when you win all the time… The losses are what define a man’s faith.',
    book: 'The Alloy of Law (Mistborn)',
  },
  {
    quote:
      'Trust is a fragile thing. But in the end, it is the thing that makes us strong.',
    book: 'The Well of Ascension (Mistborn)',
  },
  {
    quote:
      'The measure of a person is not how much they have achieved but how they deal with failure.',
    book: 'Mistborn: The Final Empire',
  },
  {
    quote:
      'A tyrant doesn’t force people to follow him. He coaxes them into it, one small step at a time.',
    book: 'Mistborn: The Well of Ascension',
  },
  {
    quote: 'Those who take the gold and rule make the rules.',
    book: 'Warbreaker',
  },
  {
    quote: 'Sometimes men would rather die than admit they were wrong.',
    book: 'The Hero of Ages (Mistborn)',
  },
  {
    quote:
      'We follow the paths we choose, and there is no salvation in regret.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote:
      'The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones.',
    book: 'The Alloy of Law (Mistborn)',
  },
  {
    quote: 'When you know a thing well, you are less likely to fear it.',
    book: 'Elantris',
  },
  {
    quote: 'There is beauty in strength, and strength in beauty.',
    book: 'Warbreaker',
  },
  {
    quote: 'A hero does not choose her trials.',
    book: 'The Hero of Ages (Mistborn)',
  },
  {
    quote: 'Realization is worth nothing without application.',
    book: 'The Alloy of Law (Mistborn)',
  },
  {
    quote: 'A good king is one who is willing to make the tough decisions.',
    book: 'Elantris',
  },
  {
    quote: 'It’s not about what is. It’s about what could be.',
    book: 'Skyward',
  },
  {
    quote:
      'A leader is not defined by the number of people he controls but by the number of people he serves.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote: 'You can’t solve a problem by ignoring it.',
    book: 'The Hero of Ages (Mistborn)',
  },
  {
    quote:
      'A man’s worth is not measured by how he treats those above him, but those below him.',
    book: 'Warbreaker',
  },
  {
    quote:
      'Sometimes, the prize is not worth the costs. The means by which we achieve victory are as important as the victory itself.',
    book: 'The Way of Kings (Stormlight Archive)',
  },
  {
    quote: 'Most people ignore the strange and unusual. I am not most people.',
    book: 'The Rithmatist',
  },
  {
    quote:
      'If you’re always on edge, you stop noticing the little things in life that make it worth living.',
    book: 'The Reckoners: Steelheart',
  },
  {
    quote:
      'You must find your own way, child. No one else can do that for you.',
    book: 'Rhythm of War (Stormlight Archive)',
  },
  {
    quote:
      'There are two kinds of people in this world. The ones who let the fear of failing stop them, and the ones who fail constantly but still keep going.',
    book: 'Skyward',
  },
  {
    quote: 'A person can get used to anything if given enough time.',
    book: 'Elantris',
  },
  {
    quote:
      'Faith means that it doesn’t matter what happens. You can trust that somebody is watching over you.',
    book: 'Mistborn: The Final Empire',
  },
  {
    quote: 'To love the journey is to accept no final destination.',
    book: 'Rhythm of War (Stormlight Archive)',
  },
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
    <div className="w-full md:w-1/2 text-center md:text-left min-h-24">
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
