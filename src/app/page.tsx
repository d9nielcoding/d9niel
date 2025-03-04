import d9nielNotion from "@/assets/images/d9niel-notion.png";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cards />
    </div>
  );
}

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-[500px] gap-4">
      <div className="w-3/5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Hello! I'm <span className="text-primary">Frontend Developer</span>
          <br/>
          Travis Daniel
        </h1>
        <h3 className="text-lg">
          I'm a software developer, consultant, and creator. I'm passionate about building
          products that help people live better lives.
        </h3>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Image src={d9nielNotion} alt="D9niel" width={320} height={320} className="rounded-full bg-primary p-8" />
      </div>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <div className="flex gap-10">
      <Card title="Developer">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iusto dolor reiciendis quod eius tempore iste, ipsam quidem maxime magni culpa odio nihil doloremque, voluptatem, impedit ullam distinctio! Voluptate, dolore.</p>
      </Card>
      <Card title="Consultant">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iusto dolor reiciendis quod eius tempore iste, ipsam quidem maxime magni culpa odio nihil doloremque, voluptatem, impedit ullam distinctio! Voluptate, dolore.</p>
      </Card>
      <Card title="Creator">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iusto dolor reiciendis quod eius tempore iste, ipsam quidem maxime magni culpa odio nihil doloremque, voluptatem, impedit ullam distinctio! Voluptate, dolore.</p>
      </Card>
    </div>
  );
};