'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCalmMotion } from '@/components/Portfolio/Motion';

const stages = [
  {
    name: 'Client',
    note: 'An action creates a request. Nothing has reached the application yet.',
  },
  {
    name: 'Validate',
    note: 'Check the input before passing it on. Invalid input should stop here.',
  },
  {
    name: 'Data',
    note: 'A validated request reaches the data layer and asks for a result.',
  },
  {
    name: 'Response',
    note: 'The result travels back to the client. One complete request lifecycle.',
  },
];
export default function SignalTrace() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [fail, setFail] = useState(false);
  const reduced = useCalmMotion();
  const failed = fail && step === 1;
  const complete = step === 3 || failed;
  useEffect(() => {
    if (!running || complete) return;
    const timer = window.setTimeout(
      () => setStep((value) => Math.min(3, value + 1)),
      1400
    );
    return () => window.clearTimeout(timer);
  }, [running, complete, step]);
  const next = () => {
    setRunning(false);
    setStep((value) => Math.min(3, value + 1));
  };
  const reset = () => {
    setRunning(false);
    setStep(0);
  };
  return (
    <div className="overflow-hidden rounded-lg border border-[#c9c9bf] bg-[#eeeee5]">
      <div className="flex justify-between border-b border-[#c9c9bf] px-5 py-4 font-mono text-[10px] text-[#62675f]">
        <span>03 / SIGNAL TRACE</span>
        <span>SIMULATION</span>
      </div>
      <div className="p-5 sm:p-8">
        <div className="relative grid grid-cols-4 gap-2 py-9">
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-[12%] left-[12%] h-px bg-[#b9bfb1]"
          />
          {stages.map((stage, index) => (
            <div
              key={stage.name}
              className="relative flex flex-col items-center gap-4"
            >
              <div
                className={`flex size-10 items-center justify-center rounded-full border font-mono text-[10px] sm:size-12 ${step === index ? 'border-[#a65332] bg-[#a65332] text-[#f6f5ef]' : step > index ? 'border-[#64715f] bg-[#d9dfd1]' : 'border-[#c0c6b7] bg-[#eeeee5] text-[#62675f]'}`}
              >
                {String(index + 1).padStart(2, '0')}
                {step === index && (
                  <motion.span
                    layoutId="signal-marker"
                    className="absolute -top-3 size-1.5 rounded-full bg-[#a65332]"
                    transition={{ type: 'spring', stiffness: 180, damping: 22 }}
                  />
                )}
              </div>
              <span className="text-[10px] sm:text-xs">{stage.name}</span>
            </div>
          ))}
        </div>
        <div
          aria-live="polite"
          aria-atomic="true"
          className="min-h-[125px] border-y border-[#c9c9bf] py-5"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${step}-${failed}`}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: reduced ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 0.15 }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#a65332]">
                {failed
                  ? 'Request stopped'
                  : step === 3
                    ? 'Trace complete'
                    : `Stage ${step + 1} / ${stages[step].name}`}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#62675f]">
                {failed
                  ? 'Validation failed. The request stops before reaching the database. Reset the trace to try again.'
                  : stages[step].note}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <label className="mt-6 flex items-center gap-3 text-xs text-[#62675f]">
          <input
            type="checkbox"
            checked={fail}
            disabled={step > 0 || running}
            onChange={(e) => setFail(e.target.checked)}
            className="size-4 accent-[#a65332]"
          />
          Inject a validation failure
        </label>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            disabled={complete}
            onClick={() => setRunning((value) => !value)}
            className="lab-light-button"
          >
            {running && !complete ? 'Pause trace' : 'Run trace'}{' '}
            {running && !complete ? 'Ⅱ' : '→'}
          </button>
          <button
            disabled={complete}
            onClick={next}
            className="lab-light-button"
          >
            Next step →
          </button>
          <button onClick={reset} className="lab-light-button">
            Reset ↻
          </button>
        </div>
        <p className="mt-5 font-mono text-[9px] leading-5 text-[#62675f]">
          An illustrative model. No requests are sent to a server.
        </p>
      </div>
    </div>
  );
}
