import { menuItems } from "@/utils/data";
import { PageProps } from "@/utils/types";
import { notFound } from "next/navigation";
const apiUrl = process.env.API_URL;

export const generateStaticParams = async () => {
  const apiUrl = process.env.API_URL;
  console.log(apiUrl);
  console.log(process.env.API_URL);
  const response = await fetch(`https://server-lac-two.vercel.app/pages`);
  const pages = await response.json();

  return pages.map((page: PageProps) => ({
    page: page.id,
  }));
};

type Props = {
  params: { pageId: string };
};

const Page = async ({ params }: Props) => {
  const { pageId } = params;
  const response = await fetch(
    `https://server-lac-two.vercel.app/pages/${pageId}`
  );
  const pageData = await response.json();
  console.log(pageData);

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      {menuItems.map(
        (item, i) =>
          pageId === item.val && <item.comp key={i} {...pageData[0]} />
      )}
    </div>
  );
};

export default Page;
