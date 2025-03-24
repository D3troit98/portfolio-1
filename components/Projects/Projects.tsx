import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Lock } from 'lucide-react';

import { projects } from '../../constants/constants';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
}

interface BlogCardProps {
  project: Project;
}

const BlogCard: React.FC<BlogCardProps> = ({ project }) => {
  const isPrivateRepo = project.source === '';

  return (
    <Card className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border-none text-white shadow-xl hover:scale-105 transition-transform duration-300">
      <CardHeader className="pb-0">
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4 space-y-3">
        <CardTitle className="text-xl font-bold text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-gradient-to-r from-[#B133FF] to-[#00DBD8] text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex w-full justify-between pt-4 gap-2 border-t border-gray-700">
        <Button
          asChild
          variant="outline"
          className="w-1/2 bg-transparent text-white border-[#B133FF] hover:bg-[#B133FF]/20"
        >
          <Link
            href={project.visit}
            target="_blank"
            className="flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Visit App
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className={`w-1/2 bg-transparent text-white ${
            isPrivateRepo
              ? 'border-gray-500 cursor-not-allowed opacity-50'
              : 'border-[#00DBD8] hover:bg-[#00DBD8]/20'
          }`}
          disabled={isPrivateRepo}
        >
          {isPrivateRepo ? (
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Private Repo
            </div>
          ) : (
            <Link
              href={project.source}
              target="_blank"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Source Code
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {projects.map((project) => (
        <BlogCard key={project.id} project={project} />
      ))}
    </div>
  </Section>
);

export default Projects;
