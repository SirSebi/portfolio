import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Meine App</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Button variant="ghost">Start</Button>
              <Button variant="ghost">Über uns</Button>
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">Kontakt</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 