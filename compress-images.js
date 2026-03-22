import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioDir = path.join(__dirname, 'public', 'portfolio');

async function compressImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)} - 节省 ${savings}%`);
  } catch (error) {
    console.error(`✗ ${path.basename(inputPath)} - ${error.message}`);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const tempPath = filePath + '.tmp';
      await compressImage(filePath, tempPath);
      fs.renameSync(tempPath, filePath);
    }
  }
}

console.log('开始压缩图片...\n');
await processDirectory(portfolioDir);
console.log('\n压缩完成！');
