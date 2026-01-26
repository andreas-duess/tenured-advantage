import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const contentDir = '/Users/andreasduess/Developer/fifty-plus/src/content/podcast-wisdom';

async function fixContextParagraphs() {
  const files = await readdir(contentDir);
  const mdFiles = files.filter(f => f.endsWith('.md'));

  for (const file of mdFiles) {
    const filePath = join(contentDir, file);
    let content = await readFile(filePath, 'utf-8');

    // Find the Context section
    const contextMatch = content.match(/(## Context\s*\n\n)([^#]+)/s);

    if (contextMatch) {
      const contextText = contextMatch[2].trim();

      // Split into sentences
      const sentences = contextText.split(/\.\s+/);

      // Group into paragraphs (every 2-3 sentences)
      const paragraphs = [];
      for (let i = 0; i < sentences.length; i += 2) {
        const para = sentences.slice(i, i + 2).join('. ');
        if (para.trim()) {
          paragraphs.push(para + (para.endsWith('.') ? '' : '.'));
        }
      }

      // Replace the context section
      const newContext = '## Context\n\n' + paragraphs.join('\n\n') + '\n';
      content = content.replace(/## Context\s*\n\n[^#]+/s, newContext);

      await writeFile(filePath, content, 'utf-8');
      console.log(`Fixed ${file}`);
    }
  }
}

fixContextParagraphs().catch(console.error);
