import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getMdById(id: string) {
  const fileName = `${id}.md`;
  const fullPath = path.join(postsDirectory, fileName);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content: c } = matter(fileContents);

    const processedContent = await unified()
      .use(remarkParse as any)
      .use(remarkHtml)
      .process(c);
    const content = processedContent.toString();

    return {
      id,
      ...data,
      content,
    };
  } catch (error) {
    console.error(`Error reading file for id: ${id}`, error);
    return null;
  }
}
