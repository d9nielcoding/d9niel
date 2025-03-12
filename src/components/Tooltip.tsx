import { Tooltip as TooltipPrimitive } from 'radix-ui';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface TooltipProps {
  children: React.ReactNode;
  className?: string;
  description: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  className,
  description,
  side = 'top',
  ...props
}) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={0}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={twMerge(
              'select-none rounded-xl bg-background border-2 border-neutral-700 px-[15px] py-2.5 text-[15px] leading-none text-neutral-300 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
              className
            )}
            sideOffset={5}
            side={side}
            {...props}
          >
            {description}
            <TooltipPrimitive.Arrow className="fill-neutral-700" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
