import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BarChart, Users } from "lucide-react";

const projectHeroImage = PlaceHolderImages.find(p => p.id === 'flux-energy-hero')!;

const techStack = ["Python", "TensorFlow", "Pandas", "Next.js", "Firebase"];
const progressUpdates = [
    { status: "Completed", "description": "Initial system architecture and data modeling." },
    { status: "In Progress", "description": "Developing predictive AI models for energy consumption." },
    { status: "Planned", "description": "Real-world pilot program with a utility partner." },
];

export default function FluxEnergySystemsPage() {
    return (
        <div>
            <section className="relative h-[40vh] md:h-[50vh] w-full flex items-end text-white overflow-hidden">
                <div className="absolute inset-0 bg-primary/70 z-10" />
                <Image
                    src={projectHeroImage.imageUrl}
                    alt={projectHeroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={projectHeroImage.imageHint}
                />
                <div className="container relative z-20 pb-12">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Flux Energy Systems
                    </h1>
                    <p className="mt-2 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
                        Energy Simulation & Automation Project
                    </p>
                </div>
            </section>
            
            <div className="container py-16 md:py-24">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Project Summary</h2>
                            <div className="space-y-4 text-lg text-foreground/80">
                                <p>
                                    Flux Energy Systems is our flagship initiative to revolutionize energy management. The project focuses on creating a sophisticated simulation platform that models and predicts energy consumption across large-scale grids. 
                                </p>
                                <p>
                                    By leveraging AI-driven automation, Flux aims to enhance grid stability, optimize resource allocation, and facilitate the seamless integration of renewable energy sources. Our goal is to build a smarter, more resilient, and sustainable energy future for everyone.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Technology Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map(tech => (
                                    <Badge key={tech} variant="secondary" className="text-md px-3 py-1">{tech}</Badge>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Collaboration Info</h2>
                            <p className="text-lg text-foreground/80">
                                We are actively seeking partnerships with utility companies, renewable energy providers, and academic institutions to pilot and refine Flux Energy Systems. If you are interested in collaborating on this transformative project, please reach out to our team.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8 lg:mt-12">
                       <Card className="border-l-4 border-primary">
                           <CardHeader>
                               <div className="flex items-center gap-3">
                                   <BarChart className="h-8 w-8 text-primary" />
                                   <CardTitle className="font-headline">Project Status</CardTitle>
                               </div>
                           </CardHeader>
                           <CardContent>
                               <ul className="space-y-4">
                                   {progressUpdates.map(update => (
                                       <li key={update.description} className="flex items-start gap-3">
                                           <CheckCircle className={`h-5 w-5 mt-1 shrink-0 ${update.status === 'Completed' ? 'text-green-500' : 'text-amber-500'}`} />
                                           <div>
                                               <p className="font-semibold">{update.status}</p>
                                               <p className="text-sm text-muted-foreground">{update.description}</p>
                                           </div>
                                       </li>
                                   ))}
                               </ul>
                           </CardContent>
                       </Card>

                       <Card>
                           <CardHeader>
                               <div className="flex items-center gap-3">
                                   <Users className="h-8 w-8 text-primary" />
                                   <CardTitle className="font-headline">Team</CardTitle>
                               </div>
                           </CardHeader>
                           <CardContent>
                               <p className="text-muted-foreground">Led by Anuarg Rudra (CTO) with a dedicated team of AI engineers and data scientists.</p>
                           </CardContent>
                       </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
