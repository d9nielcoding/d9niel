'use client';
import d9nielNotionLaugh from '@/assets/images/d9niel-notion-laugh.png';
import d9nielNotion from '@/assets/images/d9niel-notion.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

const HeroSection: React.FC = () => {
  const animatingWords = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const targets = animatingWords.current?.querySelectorAll('span');
      const numberOfTargets = targets?.length || 1;
      const duration = 0.4;
      const pause = 1;
      const stagger = duration + pause;
      const repeatDelay = stagger * (numberOfTargets - 1) + pause;

      const setupInfiniteTextAnimation = () => {
        timeline.current?.kill();
        gsap.set(animatingWords.current, { autoAlpha: 1 });
        timeline.current = gsap
          .timeline({
            defaults: { ease: 'power4.inOut', repeat: -1 },
          })
          .from(Array.from(targets || []), {
            y: 80,
            duration: duration,
            opacity: 0,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay,
            },
          })
          .to(
            Array.from(targets || []),
            {
              y: -80,
              duration: duration,
              opacity: 0,
              stagger: {
                each: stagger,
                repeat: -1,
                repeatDelay: repeatDelay,
              },
            },
            stagger
          );
      };

      setupInfiniteTextAnimation();
    },
    { dependencies: [animatingWords] }
  );

  return (
    <div className="flex items-center justify-between h-[500px] gap-4">
      <div className="w-3/5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          <div className="flex gap-3">
            Hello! I&apos;m a{' '}
            <div ref={animatingWords} className="text-primary grid mt-[1px]">
              <span className="col-[1/2] row-[1/2]">Frontend Developer</span>
              <span className="col-[1/2] row-[1/2]">Career Consultant</span>
              <span className="col-[1/2] row-[1/2]">Creator</span>
              <span className="col-[1/2] row-[1/2]">Thinker</span>
            </div>
          </div>
          Travis Daniel
        </h1>
        <h3 className="text-lg">
          I&apos;m passionate about understanding the world, understanding
          myself, and learning all possible ways to make the world a better
          place.
        </h3>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <div className="relative w-[320px] h-[320px] [perspective:1000px] group">
          <div className="absolute w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <Image
              src={d9nielNotion}
              alt="D9niel"
              width={320}
              height={320}
              className="absolute w-full h-full rounded-full bg-primary p-8 [backface-visibility:hidden]"
            />
            <Image
              src={d9nielNotionLaugh}
              alt="D9niel Laugh"
              width={320}
              height={320}
              className="absolute w-full h-full rounded-full bg-secondary p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
