import { Power4 } from 'gsap';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 1,
      y: -2000,
      ease: Power4.easeOut,
      delay: 1,
    });
  });
  return (
    <section>
      <div className="transition-effect" ref={trans} />
    </section>
  );
};

Transition.propTypes = {
  timeline: PropTypes.func.isRequired,
};

export default Transition;
