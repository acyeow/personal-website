import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className='bg-gradient-to-r from-[#224870] via-[#2A4494] to-[#4EA5D9] bg-clip-text text-transparent font-bold text-3xl drop-shadow'>
        {page.title}
      </h1>
      <div className='text-lg text-gray-700 mt-10'>
        {" "}
        <PortableText value={page.content} />{" "}
      </div>
    </div>
  );
}
