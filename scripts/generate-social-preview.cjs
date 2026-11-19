// Run with node scripts/generate-social-preview.cjs after editing the banner.
const path = require('node:path');
const sharp = require(require.resolve('sharp', { paths: [require.resolve('next')] }));

sharp(path.join(__dirname, '../public/images/profile-banner.svg'))
  .resize(1200, 630, { fit: 'contain', background: '#f6f5ef' })
  .flatten({ background: '#f6f5ef' })
  .png()
  .toFile(path.join(__dirname, '../public/images/social-preview.png'))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
