'use client';
import SectionTitle from '@/components/SectionTitle';
import { Skill, SkillMap } from '@/constants/skill-images';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SkillsStackSection: React.FC = () => {
  const [isReversed] = useState(false);
  const movingContainer = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      const setupInfiniteMarqueeTimeline = () => {
        timeline.current?.kill();
        gsap.set(movingContainer.current, {
          xPercent: isReversed ? -50 : 0,
        });
        timeline.current = gsap
          .timeline({
            defaults: { ease: 'none', repeat: -1 },
          })
          .to(movingContainer.current, {
            xPercent: isReversed ? 0 : -50,
            duration: 20,
          })
          .set(movingContainer.current, { xPercent: 0 });
      };

      setupInfiniteMarqueeTimeline();
    },
    { dependencies: [isReversed] }
  );

  const timelineTimeScaleTween = useRef<GSAPTween>(null);

  const onPointerEnter = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 0.25,
      duration: 0.4,
    });
  };

  const onPointerLeave = () => {
    if (!timeline.current) return;
    timelineTimeScaleTween.current?.kill();
    timelineTimeScaleTween.current = gsap.to(timeline.current, {
      timeScale: 1,
      duration: 0.2,
    });
  };

  // Duplicate skills array for seamless infinite scroll
  const listContent = useMemo(() => {
    const allSkills = Object.keys(SkillMap);
    const skillList = [...allSkills.slice(0, 6), ...allSkills.slice(0, 6)];
    const skillList2 = [...allSkills.slice(6, 12), ...allSkills.slice(6, 12)];
    const skillList3 = [...allSkills.slice(12, 18), ...allSkills.slice(12, 18)];

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 -translate-x-10">
          {skillList.map((skill, index) => {
            return (
              <SkillCard key={`skill-${index}`}>
                <Image
                  src={SkillMap[skill as Skill]}
                  alt={skill}
                  height={46}
                  width={46}
                />
              </SkillCard>
            );
          })}
        </div>
        <div className="flex gap-4">
          {skillList2.map((skill, index) => {
            return (
              <SkillCard key={`skill-${index}`}>
                <Image
                  src={SkillMap[skill as Skill]}
                  alt={skill}
                  height={46}
                  width={46}
                />
              </SkillCard>
            );
          })}
        </div>
        <div className="flex gap-4 translate-x-10">
          {skillList3.map((skill, index) => {
            return (
              <SkillCard key={`skill-${index}`}>
                <Image
                  src={SkillMap[skill as Skill]}
                  alt={skill}
                  height={46}
                  width={46}
                />
              </SkillCard>
            );
          })}
        </div>
      </div>
    );
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle title="Skill Stack" />
      <div
        className="overflow-hidden"
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 50%, black 50%, transparent 100%)',
        }}
      >
        <div
          ref={movingContainer}
          className="flex gap-4 w-fit py-8"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 40%, black 60%, transparent 100%)',
          }}
        >
          {/* FIXME: will dash forward a little bit when the list is finished */}
          {listContent}
          {listContent}
        </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-24 w-24 border border-neutral-700 rounded-xl bg-neutral-900  transition-all duration-300 ${children ? 'hover:shadow-[0_0_5px_5px_rgba(255,255,255,0.1)]' : ''}`}
    >
      {children}
    </div>
  );
};

export default SkillsStackSection;
