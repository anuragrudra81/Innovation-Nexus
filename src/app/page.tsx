import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: (typeof PlaceHolderImages)[0];
};

const projectsData: Project[] = [
  {
    id: "flux-energy",
    title: "Flux Energy Systems",
    description: "An advanced energy simulation and automation platform for a sustainable future.",
    href: "/projects/flux-energy-systems",
    image: PlaceHolderImages.find(p => p.id === "flux-energy-project")!,
  },
  {
    id: "isaacsim-robotics",
    title: "IsaacSim Robotics",
    description: "AI-driven robotic system modeling for complex industrial applications.",
    href: "/projects/isaacsim-robotics",
    image: PlaceHolderImages.find(p => p.id === "isaacsim-robotics-project")!,
  },
  {
    id: "ai-design-studio",
    title: "AI-Driven Design Studio",
    description: "A generative design system leveraging AI to accelerate prototyping.",
    href: "/projects",
    image: PlaceHolderImages.find(p => p.id === "future-project")!,
  },
];

const teamMembers = [
    {
        name: "Harris Frangou",
        role: "CEO",
        image: PlaceHolderImages.find(p => p.id === "harris-frangou-ceo")!,
    },
    {
        name: "Anuarg Rudra",
        role: "CTO",
        image: PlaceHolderImages.find(p => p.id === "anuarg-rudra-cto")!,
    }
]

const aboutImage = PlaceHolderImages.find(p => p.id === "about-us-image")!;
const heroImage = PlaceHolderImages.find(p => p.id === "hero-background")!;

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
        />
        <div className="container mx-auto max-w-5xl relative z-20 px-4">
          <h1 className="font-headline text-4xl font-bold md:text-6xl lg:text-7xl drop-shadow-md">
            Innovating Through AI & Simulation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Innovation Nexus is the R&D studio building the next generation of intelligent systems and sustainable technologies.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">Explore Projects</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Vision</h2>
                    <p className="text-lg text-foreground/80">
                        At Innovation Nexus, our mission is to drive progress by pioneering cutting-edge solutions in artificial intelligence and energy systems. We operate as a dynamic R&D studio, transforming bold ideas into tangible, high-impact prototypes.
                    </p>
                    <p className="text-foreground/70">
                        Our innovation process is rooted in deep simulation, rigorous testing, and strategic patenting, ensuring that our creations are not only groundbreaking but also robust and market-ready. We thrive on collaboration and are always seeking partners to join us in shaping the future.
                    </p>
                    <Button variant="link" asChild className="p-0 h-auto text-base text-primary">
                        <Link href="/team">Meet our team <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
                <div className="flex justify-center">
                  <Image 
                      src={aboutImage.imageUrl}
                      alt={aboutImage.description}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-xl"
                      data-ai-hint={aboutImage.imageHint}
                  />
                </div>
            </div>
        </div>
      </section>
      
      {/* Projects Showcase */}
      <section id="projects" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Core Projects</h2>
          <p className="mt-2 max-w-2xl mx-auto text-foreground/70">
            From sustainable energy to autonomous robotics, our work is diverse and forward-thinking.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden bg-card border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
                  <Button variant="outline" className="mt-6 self-start" asChild>
                    <Link href={project.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section id="team" className="py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Led by Visionaries</h2>
            <p className="mt-2 max-w-2xl mx-auto text-foreground/70">
                Our leadership brings together decades of experience in technology, innovation, and business.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
                {teamMembers.map(member => (
                    <div key={member.name} className="flex flex-col items-center gap-4">
                        <Image
                            src={member.image.imageUrl}
                            alt={member.image.description}
                            width={160}
                            height={160}
                            className="rounded-full object-cover ring-4 ring-primary/20"
                            data-ai-hint={member.image.imageHint}
                        />
                        <div>
                            <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                            <p className="text-primary">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="mt-16" asChild size="lg">
              <Link href="/team">Meet The Full Team</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}