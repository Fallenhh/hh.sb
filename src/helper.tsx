import { readdirSync, promises} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import matter from 'gray-matter';


export type Post = {
  name: string,
  published: Date,
  updated?: Date,
  excerpt?: string,
  content: string,
}


export const __dirname = dirname(fileURLToPath(import.meta.url));
export const mdPath = join(__dirname, './md');

const mdFiles: string[] = readdirSync(mdPath).filter(filename  => filename.endsWith('.md'));

async function readFilesToPost(fileNames: string[]): Promise<Post[]> {
  try {
    const filePromises = fileNames.map(async (fileName) => {
        const content = await promises.readFile(join(mdPath, fileName), 'utf8');
        const postMatter = matter(content);

        return {
          name: fileName.replace('.md', ''),
          published: postMatter.data.published,
          updated: postMatter.data.updated,
          excerpt: postMatter.data.excerpt,
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
