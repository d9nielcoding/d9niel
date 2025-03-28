import { DoubleArrowDownIcon } from '@radix-ui/react-icons';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center px-10 pt-10">
      <div className="mb-4 flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-lg">
          Ready to collaborate or have a question? Let&apos;s connect!
        </p>
      </div>
      <div className="mt-10 flex gap-4">
        <div className="flex gap-2 text-4xl">
          {[...Array(3)].map((_, index) => (
            <DoubleArrowDownIcon key={index} className="h-10 w-10" />
          ))}
        </div>
      </div>
    </div>
  );
}
