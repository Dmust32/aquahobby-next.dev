import { useEffect, useState, useRef } from 'react';
import './FadeInSection.module.scss';

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const domRef = useRef();
  useEffect(() => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setAlreadyAnimated(true)
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible || alreadyAnimated ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
