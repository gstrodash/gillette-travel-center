import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 215;
const FRAME_PATH = '/truck-frames/frame_'; // e.g., /truck-frames/frame_0001.png

export default function TruckHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  const isLoaded = loadedFrames === FRAME_COUNT;

  // 1. Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(4, '0');
      img.src = `${FRAME_PATH}${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        setLoadedFrames(loadedCount);
      };
      images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

      // 2. Draw Frame & Handle Scroll
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let requestRef: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(Math.max(0, currentFrameIndex));
    };

    let currentFrameIndex = 0;

    const renderFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.width;
      const ih = img.height;

      const zoomFactor = 0.9;
      const finalScale = (cw / iw) * zoomFactor;
      const newWidth = iw * finalScale;
      const newHeight = ih * finalScale;

      const offsetX = (cw - newWidth) / 2;
      const offsetY = (ch - newHeight) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

      // Strip near-black pixels so screen blend produces clean transparency
      const imageData = ctx.getImageData(0, 0, cw, ch);
      const data = imageData.data;
      const threshold = 40;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        if (r < threshold && g < threshold && b < threshold) {
          data[i + 3] = 0; // fully transparent
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };

    // Scroll mapping logic with Smooth Interpolation
    let currentFrame = 0;
    let targetFrame = 0;
    let isAnimating = false;

    const renderLoop = () => {
      // Lerp for buttery smooth gliding between frames
      currentFrame += (targetFrame - currentFrame) * 0.1;
      
      // If we're still moving towards the target, keep looping
      if (Math.abs(targetFrame - currentFrame) > 0.05) {
        renderFrame(Math.round(currentFrame));
        requestRef = requestAnimationFrame(renderLoop);
      } else {
        // We've arrived, snap exactly to target and stop looping
        currentFrame = targetFrame;
        renderFrame(Math.round(currentFrame));
        isAnimating = false;
      }
    };

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollDistance = rect.height - window.innerHeight;
      const scrolled = -rect.top; 
      
      let progress = scrolled / scrollDistance;
      progress = Math.max(0, Math.min(1, progress));

      // Animation finishes at 80% scroll.
      const animationEnd = 0.8; 
      const adjustedProgress = Math.min(1, progress / animationEnd);

      targetFrame = Math.floor(adjustedProgress * (FRAME_COUNT - 1));
      
      if (!isAnimating && Math.abs(targetFrame - currentFrame) > 0.1) {
        isAnimating = true;
        requestRef = requestAnimationFrame(renderLoop);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      if (requestRef) cancelAnimationFrame(requestRef);
    };
  }, [isLoaded]);

  return (
    // Height set to 150vh to allow the user to easily scroll past the animation in a single stroke
    <section ref={containerRef} className="hero-section" style={{ height: '150vh', position: 'relative', backgroundColor: '#000' }}>
      

      {/* 
        This wrapper is sticky, keeping everything pinned for the 300vh scroll duration 
      */}
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
        
        {/* Gas Station Background Photo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url("https://gillettetravelctr.com/wp-content/uploads/2026/05/113A8960-e1778705795840.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          {/* Lightened overlay so the background photo is more visible */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />
        </div>

        {/* 
          Truck Layer (Screen Blended)
          Using mixBlendMode: 'screen' causes all black pixels to become completely transparent.
          This allows the truck to seamlessly overlay the gas station photo.
        */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, mixBlendMode: 'screen', pointerEvents: 'none' }}>
          
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease',
              backgroundColor: 'transparent',
              // Crushing the contrast ensures the video's background is pure black, eliminating the faint bounding box
              // Boosting brightness slightly makes the truck easier to see
              filter: 'brightness(1.6)'
            }}
          />

          {/* 
            Shadow "Curtains" 
            Because this div is inside the screen-blended container, these black gradients 
            actually act as transparency masks! They smoothly fade the hard edges of the video 
            directly into the gas station background.
          */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
            background: 'linear-gradient(to right, #000 0%, #000 8%, transparent 28%, transparent 72%, #000 92%, #000 100%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, #000 0%, transparent 25%, transparent 75%, #000 100%)'
          }} />

        </div>

        {/* Hero Content (Clean, Organized Layout) */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10, pointerEvents: 'none' }}>
          <div className="container" style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '3rem', paddingTop: '10vh' }}>
            
            {/* The Star of the Show: The Massive Logo */}
            <img 
              className="reveal"
              src="https://gillettetravelctr.com/wp-content/uploads/2026/05/GTC-GilletteTravelCenter-FINAL-e1778707195173-1024x981.png" 
              alt="Gillette Travel Center"
              style={{ width: '600px', maxWidth: '90vw', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.9))' }}
            />

          </div>
        </div>

      </div>

    </section>
  );
}
