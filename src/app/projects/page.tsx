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
  longDescription: string;
  href: string;
  image: (typeof PlaceHolderImages)[0];
};

const projects: Project[] = [
  {
    id: "flux-energy",
    title: "Flux Energy Systems",
    description: "An advanced energy simulation and automation platform.",
    longDescription: "Dive deep into our energy simulation & automation project, designed to optimize power grids and promote sustainability through intelligent control systems.",
    href: "/projects/flux-energy-systems",
    image: PlaceHolderImages.find(p => p.id === "flux-energy-project")!,
  },
  {
    id: "isaacsim-robotics",
    title: "IsaacSim Robotics",
    description: "AI-driven robotic system modeling for complex industrial applications.",
    longDescription: "Explore how we use NVIDIA's Isaac Sim to create photorealistic, physics-accurate virtual environments for developing and testing AI-driven robotic systems.",
    href: "/projects/isaacsim-robotics",
    image: PlaceHolderImages.find(p => p.id === "isaacsim-robotics-project")!,
  },
  {
    id: "ai-design-studio",
    title: "AI-Driven Design Studio",
    description: "A generative design system leveraging AI to accelerate prototyping.",
    longDescription: "This upcoming project aims to build an AI-powered design system that generates UI components and layouts, drastically reducing development time for new prototypes.",
    href: "#",
    image: PlaceHolderImages.find(p => p.id === "future-project")!,
  },
];


export default function ProjectsPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Innovations</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                    We are constantly pushing the boundaries of what's possible. Explore our portfolio of groundbreaking projects.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:w-2/5 relative min-h-[200px] md:min-h-full">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={project.image.imageHint}
                  />
                </div>
                <div className="md:w-3/5 flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                    <CardDescription>{project.longDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button variant="default" asChild>
                      <Link href={project.href}>
                        View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
            </div>
        </div>
    )
}
