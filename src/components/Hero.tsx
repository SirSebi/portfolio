import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-muted/50">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Willkommen auf unserer Seite
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Eine moderne One-Page Application mit React, Tailwind und Shadcn
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">
            Mehr erfahren
          </Button>
        </div>
      </div>
    </div>
  );
} 