const sharp = require('sharp');
const path = require('path');

async function optimizeLogo() {
  try {
    // Read the existing WebP file
    const inputPath = path.join(__dirname, '../public/logo.webp');
    const outputPath = path.join(__dirname, '../public/logo-hd.webp');

    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ 
        quality: 100,
        lossless: true,
        force: true // Force WebP output even if input is WebP
      })
      .toFile(outputPath);
    
    console.log('✅ Logo has been successfully optimized to HD quality!');
  } catch (error) {
    console.error('❌ Error optimizing logo:', error);
  }
}

optimizeLogo();
