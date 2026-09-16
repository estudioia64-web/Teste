const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. VERTICAL OFFICIAL BADGE (Exact match to reference image)
function getVerticalSvg(theme = 'dark') {
  const subtitleColor = theme === 'light' ? '#0f3d26' : '#FFFFFF';
  const subtitleBg = theme === 'light' ? `
    <rect x=\"80\" y=\"815\" width=\"640\" height=\"52\" rx=\"26\" fill=\"#E8F5E9\" />
  ` : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 960" width="800" height="960" fill="none">
  <defs>
    <!-- Lime green shield gradient -->
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#73c846" />
      <stop offset="50%" stop-color="#5fb635" />
      <stop offset="100%" stop-color="#4ba226" />
    </linearGradient>

    <!-- VetPet text gradient -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4eb83e" />
      <stop offset="45%" stop-color="#349b2c" />
      <stop offset="100%" stop-color="#1f7422" />
    </linearGradient>

    <!-- Drop shadow for shield -->
    <filter id="shieldShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#02140a" flood-opacity="0.35" />
    </filter>

    <!-- Drop shadow for text -->
    <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#051f0f" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- SHIELD EMBLEM -->
  <g transform="translate(150, 40)" filter="url(#shieldShadow)">
    <!-- 1. Lime Green Outer Shield (House Pentagon with rounded corners) -->
    <path d="M250 18 L460 148 C476 158 484 176 484 195 L484 450 C484 480 460 504 430 504 L70 504 C40 504 16 480 16 450 L16 195 C16 176 24 158 40 148 Z" 
          fill="url(#limeGrad)" />

    <!-- 2. Pure White Inner Shield -->
    <path d="M250 50 L438 166 C448 172 454 184 454 196 L454 444 C454 466 436 484 414 484 L86 484 C64 484 46 466 46 444 L46 196 C46 184 52 172 62 166 Z" 
          fill="#FFFFFF" />

    <!-- 3. Forest Green Silhouettes inside White Shield -->
    <g fill="#134e23">
      <!-- Cat Silhouette (Left) facing right -->
      <path d="
        M76 330
        C76 270 94 210 120 162
        C125 154 132 140 134 122
        C135 116 142 120 148 128
        C155 138 160 148 166 158
        C175 156 184 160 190 168
        C196 176 197 186 193 194
        C199 200 206 208 206 218
        C206 226 198 234 190 240
        C196 245 196 256 190 262
        C183 268 172 270 164 266
        C158 282 150 300 147 320
        C144 342 147 364 152 384
        C138 376 120 370 106 356
        C88 342 76 338 76 330 Z
      " />

      <!-- Cat Eye (White dot) -->
      <circle cx="168" cy="188" r="7.5" fill="#FFFFFF" />

      <!-- Dog Silhouette (Right) facing left -->
      <path d="
        M225 170
        C233 144 255 122 284 114
        C318 104 352 118 372 142
        C388 164 394 194 390 220
        C386 250 376 276 362 304
        C370 336 378 376 380 416
        C380 448 375 470 364 476
        L268 476
        C274 454 280 428 282 400
        C282 370 278 340 268 314
        C260 290 246 268 232 246
        C222 232 210 222 206 206
        C202 192 210 180 225 170 Z
      " />

      <!-- Dog Eye (White dot) -->
      <circle cx="260" cy="166" r="8.5" fill="#FFFFFF" />

      <!-- Dog Ear Separation Contour (White curved line) -->
      <path d="M322 134 C334 158 348 188 345 222 C342 254 328 278 312 288" 
            stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" />

      <!-- Stethoscope Loop -->
      <path d="
        M74 326 
        C70 380 102 436 164 466 
        C216 490 286 488 334 458
        C348 450 358 436 364 422
      " stroke="#134e23" stroke-width="30" stroke-linecap="round" fill="none" />
      
      <!-- White highlight on stethoscope tubing -->
      <path d="
        M74 326 
        C70 380 102 436 164 466 
        C216 490 286 488 334 458
        C348 450 358 436 364 422
      " stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.7" />

      <!-- Stethoscope Bell / Chestpiece -->
      <circle cx="364" cy="420" r="33" fill="#134e23" stroke="#FFFFFF" stroke-width="8" />
      <circle cx="364" cy="420" r="12" fill="#FFFFFF" />
    </g>
  </g>

  <!-- TYPOGRAPHY: VetPet (Custom bouncy lettering with thick white sticker border) -->
  <g filter="url(#textShadow)">
    <!-- Layer 1: Dark green outer shadow border -->
    <text x="400" y="740" 
          text-anchor="middle" 
          font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
          font-weight="900" 
          font-size="192" 
          letter-spacing="-3"
          stroke="#062410" 
          stroke-width="48" 
          stroke-linejoin="round" 
          stroke-linecap="round" 
          fill="#062410">VetPet</text>

    <!-- Layer 2: Crisp pure white sticker contour border -->
    <text x="400" y="740" 
          text-anchor="middle" 
          font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
          font-weight="900" 
          font-size="192" 
          letter-spacing="-3"
          stroke="#FFFFFF" 
          stroke-width="36" 
          stroke-linejoin="round" 
          stroke-linecap="round" 
          fill="#FFFFFF">VetPet</text>

    <!-- Layer 3: Vibrant green fill with vertical gradient -->
    <text x="400" y="740" 
          text-anchor="middle" 
          font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
          font-weight="900" 
          font-size="192" 
          letter-spacing="-3"
          fill="url(#textGrad)">VetPet</text>
  </g>

  <!-- SUBTITLE: CLÍNICA VETERINÁRIA & PET SHOP -->
  ${subtitleBg}
  <text x="400" y="850" 
        text-anchor="middle" 
        font-family="'Montserrat', 'Outfit', 'Plus Jakarta Sans', sans-serif" 
        font-weight="800" 
        font-size="30" 
        letter-spacing="2.5" 
        fill="${subtitleColor}">CLÍNICA VETERINÁRIA &amp; PET SHOP</text>
</svg>`;
}

// 2. HORIZONTAL LOCKUP (Shield left, VetPet + Subtitle right - for Navigation Bars)
function getHorizontalSvg(theme = 'dark') {
  const subtitleColor = theme === 'light' ? '#0f3d26' : '#FFFFFF';
  const subtitleBg = theme === 'light' ? `
    <rect x="290" y="195" width="490" height="38" rx="19" fill="#E8F5E9" />
  ` : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 260" width="820" height="260" fill="none">
  <defs>
    <linearGradient id="hLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#73c846" />
      <stop offset="50%" stop-color="#5fb635" />
      <stop offset="100%" stop-color="#4ba226" />
    </linearGradient>

    <linearGradient id="hTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4eb83e" />
      <stop offset="45%" stop-color="#349b2c" />
      <stop offset="100%" stop-color="#1f7422" />
    </linearGradient>

    <filter id="hShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#02140a" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- SHIELD EMBLEM (Left, scaled down to height ~230) -->
  <g transform="translate(20, 15) scale(0.44)" filter="url(#hShadow)">
    <path d="M250 18 L460 148 C476 158 484 176 484 195 L484 450 C484 480 460 504 430 504 L70 504 C40 504 16 480 16 450 L16 195 C16 176 24 158 40 148 Z" 
          fill="url(#hLimeGrad)" />
    <path d="M250 50 L438 166 C448 172 454 184 454 196 L454 444 C454 466 436 484 414 484 L86 484 C64 484 46 466 46 444 L46 196 C46 184 52 172 62 166 Z" 
          fill="#FFFFFF" />
    <g fill="#134e23">
      <path d="
        M76 330
        C76 270 94 210 120 162
        C125 154 132 140 134 122
        C135 116 142 120 148 128
        C155 138 160 148 166 158
        C175 156 184 160 190 168
        C196 176 197 186 193 194
        C199 200 206 208 206 218
        C206 226 198 234 190 240
        C196 245 196 256 190 262
        C183 268 172 270 164 266
        C158 282 150 300 147 320
        C144 342 147 364 152 384
        C138 376 120 370 106 356
        C88 342 76 338 76 330 Z
      " />
      <circle cx="168" cy="188" r="7.5" fill="#FFFFFF" />
      <path d="
        M225 170
        C233 144 255 122 284 114
        C318 104 352 118 372 142
        C388 164 394 194 390 220
        C386 250 376 276 362 304
        C370 336 378 376 380 416
        C380 448 375 470 364 476
        L268 476
        C274 454 280 428 282 400
        C282 370 278 340 268 314
        C260 290 246 268 232 246
        C222 232 210 222 206 206
        C202 192 210 180 225 170 Z
      " />
      <circle cx="260" cy="166" r="8.5" fill="#FFFFFF" />
      <path d="M322 134 C334 158 348 188 345 222 C342 254 328 278 312 288" 
            stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="
        M74 326 
        C70 380 102 436 164 466 
        C216 490 286 488 334 458
        C348 450 358 436 364 422
      " stroke="#134e23" stroke-width="30" stroke-linecap="round" fill="none" />
      <path d="
        M74 326 
        C70 380 102 436 164 466 
        C216 490 286 488 334 458
        C348 450 358 436 364 422
      " stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.7" />
      <circle cx="364" cy="420" r="33" fill="#134e23" stroke="#FFFFFF" stroke-width="8" />
      <circle cx="364" cy="420" r="12" fill="#FFFFFF" />
    </g>
  </g>

  <!-- TEXT GROUP (Right) -->
  <g transform="translate(260, 0)">
    <!-- VetPet Logotype -->
    <g filter="url(#hShadow)">
      <!-- Dark border -->
      <text x="270" y="150" 
            text-anchor="middle" 
            font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
            font-weight="900" 
            font-size="142" 
            letter-spacing="-2"
            stroke="#062410" 
            stroke-width="34" 
            stroke-linejoin="round" 
            stroke-linecap="round" 
            fill="#062410">VetPet</text>

      <!-- White contour -->
      <text x="270" y="150" 
            text-anchor="middle" 
            font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
            font-weight="900" 
            font-size="142" 
            letter-spacing="-2"
            stroke="#FFFFFF" 
            stroke-width="26" 
            stroke-linejoin="round" 
            stroke-linecap="round" 
            fill="#FFFFFF">VetPet</text>

      <!-- Green fill -->
      <text x="270" y="150" 
            text-anchor="middle" 
            font-family="'Outfit', 'Fredoka', 'Quicksand', 'Arial Black', sans-serif" 
            font-weight="900" 
            font-size="142" 
            letter-spacing="-2"
            fill="url(#hTextGrad)">VetPet</text>
    </g>

    <!-- Subtitle -->
    ${subtitleBg}
    <text x="270" y="222" 
          text-anchor="middle" 
          font-family="'Montserrat', 'Outfit', 'Plus Jakarta Sans', sans-serif" 
          font-weight="800" 
          font-size="21" 
          letter-spacing="1.8" 
          fill="${subtitleColor}">CLÍNICA VETERINÁRIA &amp; PET SHOP</text>
  </g>
</svg>`;
}

// 3. SHIELD ONLY (For Favicon & Icon Avatars)
function getShieldSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520" fill="none">
  <defs>
    <linearGradient id="favLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#73c846" />
      <stop offset="50%" stop-color="#5fb635" />
      <stop offset="100%" stop-color="#4ba226" />
    </linearGradient>
  </defs>
  <!-- Lime Green Outer Shield -->
  <path d="M250 18 L460 148 C476 158 484 176 484 195 L484 450 C484 480 460 504 430 504 L70 504 C40 504 16 480 16 450 L16 195 C16 176 24 158 40 148 Z" 
        fill="url(#favLimeGrad)" />
  <!-- White Inner Shield -->
  <path d="M250 50 L438 166 C448 172 454 184 454 196 L454 444 C454 466 436 484 414 484 L86 484 C64 484 46 466 46 444 L46 196 C46 184 52 172 62 166 Z" 
        fill="#FFFFFF" />
  <!-- Forest Green Animal Silhouettes -->
  <g fill="#134e23">
    <!-- Cat -->
    <path d="
      M76 330
      C76 270 94 210 120 162
      C125 154 132 140 134 122
      C135 116 142 120 148 128
      C155 138 160 148 166 158
      C175 156 184 160 190 168
      C196 176 197 186 193 194
      C199 200 206 208 206 218
      C206 226 198 234 190 240
      C196 245 196 256 190 262
      C183 268 172 270 164 266
      C158 282 150 300 147 320
      C144 342 147 364 152 384
      C138 376 120 370 106 356
      C88 342 76 338 76 330 Z
    " />
    <circle cx="168" cy="188" r="7.5" fill="#FFFFFF" />
    <!-- Dog -->
    <path d="
      M225 170
      C233 144 255 122 284 114
      C318 104 352 118 372 142
      C388 164 394 194 390 220
      C386 250 376 276 362 304
      C370 336 378 376 380 416
      C380 448 375 470 364 476
      L268 476
      C274 454 280 428 282 400
      C282 370 278 340 268 314
      C260 290 246 268 232 246
      C222 232 210 222 206 206
      C202 192 210 180 225 170 Z
    " />
    <circle cx="260" cy="166" r="8.5" fill="#FFFFFF" />
    <!-- Dog Ear Line -->
    <path d="M322 134 C334 158 348 188 345 222 C342 254 328 278 312 288" 
          stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" />
    <!-- Stethoscope -->
    <path d="
      M74 326 
      C70 380 102 436 164 466 
      C216 490 286 488 334 458
      C348 450 358 436 364 422
    " stroke="#134e23" stroke-width="30" stroke-linecap="round" fill="none" />
    <path d="
      M74 326 
      C70 380 102 436 164 466 
      C216 490 286 488 334 458
      C348 450 358 436 364 422
    " stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.7" />
    <circle cx="364" cy="420" r="33" fill="#134e23" stroke="#FFFFFF" stroke-width="8" />
    <circle cx="364" cy="420" r="12" fill="#FFFFFF" />
  </g>
</svg>`;
}

async function run() {
  console.log('Generating official VetPet brand assets...');

  // 1. Save SVG files
  const vDarkSvg = getVerticalSvg('dark');
  const vLightSvg = getVerticalSvg('light');
  const hDarkSvg = getHorizontalSvg('dark');
  const hLightSvg = getHorizontalSvg('light');
  const shieldSvg = getShieldSvg();

  fs.writeFileSync(path.join(outDir, 'vetpet-logo.svg'), vDarkSvg);
  fs.writeFileSync(path.join(outDir, 'vetpet-logo-light.svg'), vLightSvg);
  fs.writeFileSync(path.join(outDir, 'vetpet-logo-horizontal.svg'), hDarkSvg);
  fs.writeFileSync(path.join(outDir, 'vetpet-logo-horizontal-light.svg'), hLightSvg);
  fs.writeFileSync(path.join(outDir, 'logo.svg'), hLightSvg); // Backwards compat
  fs.writeFileSync(path.join(outDir, 'favicon.svg'), shieldSvg);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), shieldSvg);

  // 2. Render High-Resolution PNG & WebP files with Sharp
  // A. Vertical Badge (Official reference format, 1200x1440)
  await sharp(Buffer.from(vDarkSvg))
    .resize(1200, 1440)
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(path.join(outDir, 'vetpet-logo.png'));
  console.log('Created: vetpet-logo.png (1200x1440)');

  await sharp(Buffer.from(vDarkSvg))
    .resize(1200, 1440)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'vetpet-logo.webp'));
  console.log('Created: vetpet-logo.webp');

  // B. Vertical Badge Light Theme (For light background containers)
  await sharp(Buffer.from(vLightSvg))
    .resize(1200, 1440)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'vetpet-logo-light.png'));
  console.log('Created: vetpet-logo-light.png');

  // C. Horizontal Lockup (For Navigation Bar, 1640x520)
  await sharp(Buffer.from(hLightSvg))
    .resize(1640, 520)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'vetpet-logo-horizontal.png'));
  console.log('Created: vetpet-logo-horizontal.png');

  await sharp(Buffer.from(hDarkSvg))
    .resize(1640, 520)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'vetpet-logo-horizontal-dark.png'));
  console.log('Created: vetpet-logo-horizontal-dark.png');

  await sharp(Buffer.from(hLightSvg))
    .resize(1640, 520)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'vetpet-logo-horizontal.webp'));
  console.log('Created: vetpet-logo-horizontal.webp');

  // D. Shield Emblem (Square 800x800)
  await sharp(Buffer.from(shieldSvg))
    .resize(800, 800)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'vetpet-shield.png'));
  console.log('Created: vetpet-shield.png');

  // E. Favicons
  await sharp(Buffer.from(shieldSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(outDir, 'favicon-32x32.png'));
  await sharp(Buffer.from(shieldSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));

  await sharp(Buffer.from(shieldSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(outDir, 'favicon-192x192.png'));
  await sharp(Buffer.from(shieldSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-192x192.png'));

  await sharp(Buffer.from(shieldSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(outDir, 'apple-touch-icon.png'));
  await sharp(Buffer.from(shieldSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // Copy to /vetpet/assets for the PHP project too!
  const phpLogoDir = path.join(__dirname, '../vetpet/assets/images/logo');
  if (!fs.existsSync(phpLogoDir)) {
    fs.mkdirSync(phpLogoDir, { recursive: true });
  }
  fs.copyFileSync(path.join(outDir, 'vetpet-logo.png'), path.join(phpLogoDir, 'vetpet-logo.png'));
  fs.copyFileSync(path.join(outDir, 'vetpet-logo-horizontal.png'), path.join(phpLogoDir, 'vetpet-logo-horizontal.png'));
  fs.copyFileSync(path.join(outDir, 'vetpet-logo.svg'), path.join(phpLogoDir, 'vetpet-logo.svg'));
  fs.copyFileSync(path.join(outDir, 'vetpet-logo-horizontal.svg'), path.join(phpLogoDir, 'vetpet-logo-horizontal.svg'));
  fs.copyFileSync(path.join(outDir, 'logo.svg'), path.join(phpLogoDir, 'logo.svg'));
  console.log('Synchronized assets to PHP project.');

  console.log('All official logo assets generated successfully!');
}

run().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
