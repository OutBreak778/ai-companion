"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryProps {
  data: Category[];
}
const Categories = ({ data }: CategoryProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const CategoryId = searchParams.get("categoryId");

  const OnClick = (id: string | undefined) => {
    const query = { CategoryId: id };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto space-x-4 flex px-4 py-5 border-primary bg-primary/5 rounded-md">
      <button
        onClick={() => OnClick(undefined)}
        className={cn(
          `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py3 rounded-md bg-primary/10 hover:opacity-65 transition`,
          !CategoryId ? 'bg-secondary-foreground/10' : 'bg-secondary-foreground/25'
        )}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          onClick={() => OnClick(item.id)}
          key={item.id}
          className={cn(
            `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-3 md:py3 rounded-md bg-primary/10 hover:opacity-65 transition`,
            item.id === CategoryId ? 'bg-secondary-foreground/25' : 'bg-secondary-foreground/10'
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
