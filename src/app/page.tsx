import { Suspense } from "react";
import CarCatalog from "@/components/containers/CarCatalog";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading catalog...</p>}>
        <CarCatalog />
      </Suspense>
    </main>
  );
}
