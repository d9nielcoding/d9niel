const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl font-bold text-neutral-300 dark:text-neutral-300 text-center">
      {title}
    </h1>
  );
};

export default SectionTitle;
