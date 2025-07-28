import { useEffect, useState } from 'react';

function LoadingScreen({ onComplete }) {
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0); // State untuk melacak progres
    const fullText = 'Wait';
    const loadingDuration = 5000;

    useEffect(() => {
        const textInterval = setInterval(() => {
            setText((prevText) => (prevText === fullText ? '' : prevText + fullText[prevText.length]));
        }, 400);

        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 100 / (loadingDuration / 100);
                return Math.min(newProgress, 100); // Pastikan tidak melebihi 100
            });
        }, 100); // Update progres setiap 100ms

        setTimeout(() => {
            clearInterval(progressInterval);
            onComplete();
        }, loadingDuration);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplete, loadingDuration]);

    const progressBarStyles = {
        width: `${progress}%`,
        height: '100%',
        backgroundColor: '#3b82f6',
        boxShadow: '0 0 15px #3b82f6',
        borderRadius: 'inherit',
    };

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text} <span className="animate-blink ml-1">-</span>
            </div>

            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div style={progressBarStyles}></div>
            </div>
        </div>
    );
}

export default LoadingScreen;
