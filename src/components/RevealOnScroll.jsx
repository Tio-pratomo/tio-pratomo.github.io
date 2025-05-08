import { useRef, useEffect } from 'react';

function RevealOnScroll({ children, animationClass = 'fade-in' }) {
    const ref = useRef(null);
    const visibleClass = `${animationClass}-visible`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    ref.current.classList.add(visibleClass);
                } else if (ref.current) {
                    ref.current.classList.remove(visibleClass);
                }
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, [ref, visibleClass]);

    return (
        <div ref={ref} className={`reveal ${animationClass}`}>
            {children}
        </div>
    );
}

export default RevealOnScroll;
