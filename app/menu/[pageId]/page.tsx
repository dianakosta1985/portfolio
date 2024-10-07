import { menuItems } from "@/utils/data";
import { pages } from "@/utils/data";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return pages.map((page) => ({
    pageId: page.id,
  }));
};

const Page = ({ params }: any) => {
  const { pageId } = params;
  const pageData = pages.find((page) => page.id.toString() === pageId);

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
