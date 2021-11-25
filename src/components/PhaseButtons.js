import React from 'react';

export default function PhaseButtons({ labels, phase, setPhase }) {
  return (
    <div className="btn-group">
      {Object.keys(labels).map((key, index) => (
        <button
          key={key}
          type="button"
          className={`btn btn-auth ${phase === index + 1 ? 'active' : ''}`}
          onClick={() => setPhase(index + 1)}
        >
          {labels[key]}
        </button>
      ))}
    </div>
  );
}
