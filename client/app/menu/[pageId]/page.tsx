import { menuItems } from "@/utils/data";
import { PageProps } from "@/utils/types";
import { notFound } from "next/navigation";
//import useStore from "@/utils/store";

export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:3001/pages");
  const pages = await response.json();

  return pages.map((page: PageProps) => ({
    page: page.id,
  }));
};

// export async function getStaticProps({ params }: any) {
//   const response = await fetch(`http://localhost:3001/pages/${params.id}`);
//   const page = await response.json();

//   return {
//     props: {
//       pageData: page, // Pass the entire post object to the component
//     },
//   };
// }

type Props = {
  params: { pageId: string };
};

const Page = async ({ params }: Props) => {
  const { pageId } = params;
  const response = await fetch(`http://localhost:3001/pages/${pageId}`);
  const pageData = await response.json();

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
