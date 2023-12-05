import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className='text-7xl font-extrabold'>
        Hello I&apos;m{" "}
        <span className='bg-gradient-to-r from-[#224870] via-[#2A4494] to-[#4EA5D9] bg-clip-text text-transparent'>
          Andrew
        </span>
      </h1>
      <p className='mt-3 text-xl text-gray-600'>
        Thanks for visiting my website!
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>
      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project: Project) => (
          <Link
            href={`/projects/${project.slug}`}
            id={project._id}
            className='border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r from-[#224870] via-[#2A4494] to-[#4EA5D9] bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}