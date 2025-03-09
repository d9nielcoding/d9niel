interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

export enum BadgeVariant {
  Primary = 'bg-primary text-neutral-100',
  Secondary = 'bg-secondary text-neutral-900',
  Neutral = 'bg-neutral-700 text-neutral-100',
}

const Badge: React.FC<BadgeProps> = ({
  text,
  variant = BadgeVariant.Primary,
  ...props
}) => {
  return (
    <div
      className={`px-2 py-1 rounded-md ${variant} text-neutral-100 text-md`}
      {...props}
    >
      {text}
    </div>
  );
};

export default Badge;
