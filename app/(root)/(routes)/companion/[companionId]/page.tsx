import prismadb from "@/lib/prismadb";
import CompanionForm from "../components/CompanionForm";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionProps {
  params: {
    companionId: string;
  };
}

const CompanionPage = async ({ params }: CompanionProps) => {
  const userId = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionPage;
