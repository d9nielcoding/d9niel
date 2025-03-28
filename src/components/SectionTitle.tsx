const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-center text-2xl font-bold text-neutral-300 md:text-3xl">
      {title}
    </h1>
  );
};

export default SectionTitle;
