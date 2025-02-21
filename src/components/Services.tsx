import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Unsere Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Entdecken Sie unsere Dienstleistungen
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['Service 1', 'Service 2', 'Service 3'].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
                <CardDescription>Beschreibung des Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detaillierte Informationen zum Service...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 