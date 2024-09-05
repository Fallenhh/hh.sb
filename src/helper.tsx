import { readdirSync, promises} from 'fs';
import { join } from 'path';

import matter from 'gray-matter';


export type Post = {
  name: string,
  title: string,
  published: Date,
  updated?: Date,
  excerpt?: string,
  content: string,
}

console.log(process.cwd())
export const mdPath = './src/md';

const mdFiles: string[] = readdirSync(mdPath).filter(filename  => filename.endsWith('.md'));

async function readFilesToPost(fileNames: string[]): Promise<Post[]> {
  try {
    const filePromises = fileNames.map(async (fileName) => {
        const content = await promises.readFile(join(mdPath, fileName), 'utf8');
        const postMatter = matter(content, { excerpt: true });

        return {
          name: fileName.replace('.md', ''),
          title: postMatter.data.title,
          published: postMatter.data.published,
          updated: postMatter.data.updated,
          excerpt: postMatter.excerpt || '',
          content: postMatter.content,
        }
    });

    const filesArray = await Promise.all(filePromises);


    return filesArray;
  } catch (err) {
      console.error('Error reading files:', err);
      throw err;  // Re-throw the error after logging it
  }
}

const unsortedPostArray = await readFilesToPost(mdFiles);
export const postArray = unsortedPostArray.sort((a, b) => a.published > b.published ? -1 : 1);
