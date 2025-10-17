import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BarChart, Users } from "lucide-react";

const projectHeroImage = PlaceHolderImages.find(p => p.id === 'isaacsim-robotics-hero')!;

const techStack = ["NVIDIA Isaac Sim", "ROS2", "Python", "PyTorch", "Docker"];
const progressUpdates = [
    { status: "Completed", "description": "Environment setup and digital twin creation of a factory floor." },
    { status: "In Progress", "description": "Training reinforcement learning models for robotic arm manipulation." },
    { status: "Planned", "description": "Sim-to-real transfer and testing on physical hardware." },
];

export default function IsaacSimRoboticsPage() {
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
                <div className="container relative z-20 pb-12 px-4">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold drop-shadow-lg">
                        IsaacSim Robotics
                    </h1>
                    <p className="mt-2 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
                        AI-Driven Robotic System Modeling
                    </p>
                </div>
            </section>
            
            <div className="container py-16 md:py-24 px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="font-headline text-3xl font-bold text-primary mb-4">Project Summary</h2>
                            <div className="space-y-4 text-lg text-foreground/80">
                                <p>
                                    The IsaacSim Robotics project leverages NVIDIA's powerful Isaac Sim platform to build photorealistic, physics-accurate digital twins of industrial environments. These simulations serve as the training ground for our advanced AI and reinforcement learning models.
                                </p>
                                <p>
                                    By training and validating robotic systems in a virtual world, we can drastically reduce development time, lower costs, and increase safety. Our focus is on creating autonomous robots capable of performing complex manipulation and navigation tasks in dynamic, real-world settings.
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
                                We are seeking partners in manufacturing, logistics, and automation who are interested in deploying next-generation robotic solutions. Let's work together to build the autonomous factories and warehouses of the future.
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
                               <p className="text-muted-foreground">Led by our robotics division, this project is a core focus of our R&D efforts, with guidance from Harris Frangou (CEO).</p>
                           </CardContent>
                       </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
