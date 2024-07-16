
import { Card, CardContent, CardFooter, CardHeader } from "@/_components/ui/card";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/_components/ui/pagination";


import { HydrateClient } from "@/trpc/server";
import { Categories } from "./_components/categories";

export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Card className="flex flex-col  rounded-xl shadow-2xl border-x-6 border-y-4 p-6 m-8">
          <CardHeader className="flex flex-col gap-2 justify-center items-center p-10 ">
            <p className="font-semibold text-4xl">Please mark your interests!</p>
            <p className="text-sm">We will keep you notified</p>
          </CardHeader>

          <CardContent className="flex flex-col gap-1 ">
            <Categories/>
            
          </CardContent>
          <CardFooter>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

          </CardFooter>
        </Card>

      </main>
    </HydrateClient>
  );
}
