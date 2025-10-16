import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.Logo className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {new Date().getFullYear()} Innovation Nexus. All rights reserved.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">Innovating through AI and Simulation</p>
      </div>
    </footer>
  );
}
