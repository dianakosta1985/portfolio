import { menuItems } from "@/utils/data";
import { PageProps } from "@/utils/types";
import { notFound } from "next/navigation";

const apiUrl = process.env.LOCAL_API_URL ?? process.env.API_URL;

const fetchPageApi = async (path: string) => {
  const response = await fetch(`${apiUrl}${path}`);

  if (!response.ok) {
    throw new Error(`Page API request failed with status ${response.status}`);
  }

  return response.json();
};

export const generateStaticParams = async () => {
  const pages = await fetchPageApi("/pages");

  return pages.map((page: PageProps) => ({
    pageId: page.id,
  }));
};

type Props = {
  params: { pageId: string };
};

const Page = async ({ params }: Props) => {
  const { pageId } = params;
  const pageData = await fetchPageApi(`/pages/${pageId}`);
  console.log(pageData);

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      {menuItems.map(
        (item, i) => pageId === item.val && <item.comp key={i} {...pageData} />
      )}
    </div>
  );
};

export default Page;
