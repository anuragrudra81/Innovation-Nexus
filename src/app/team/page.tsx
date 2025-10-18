import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image: (typeof PlaceHolderImages)[0];
}

const teamMembers: TeamMember[] = [
    {
        name: "Harris Frangou",
        role: "Chief Executive Officer",
        bio: "Harris is a visionary leader with a passion for disruptive technologies. With a background in both engineering and business, he steers Innovation Nexus towards its strategic goals, fostering a culture of relentless innovation.",
        image: PlaceHolderImages.find(p => p.id === "harris-frangou-ceo")!,
    },
    {
        name: "Anuarg Rudra",
        role: "Chief Technology Officer",
        bio: "Anuarg is the architectural mastermind behind our technology stack. His expertise in AI, simulation, and complex systems ensures our projects are built on a foundation of technical excellence and scalability.",
        image: PlaceHolderImages.find(p => p.id === "anuarg-rudra-cto")!,
    }
]

export default function TeamPage() {
    return (
        <div className="container mx-auto max-w-5xl py-16 md:py-24 px-4">
            <div className="text-center">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Leadership</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
                    The driving force behind our innovation. Meet the minds shaping the future of technology.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                {teamMembers.map(member => (
                    <Card key={member.name} className="text-center border-2 hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                        <CardHeader className="items-center pt-8">
                            <Image
                                src={member.image.imageUrl}
                                alt={member.image.description}
                                width={128}
                                height={128}
                                className="rounded-full object-cover ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300"
                                data-ai-hint={member.image.imageHint}
                            />
                        </CardHeader>
                        <CardContent className="p-8">
                            <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                            <p className="text-primary font-medium mt-1">{member.role}</p>
                            <CardDescription className="mt-4">{member.bio}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
