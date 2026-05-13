# Assets Folder

Place your images here and update `src/assets/index.ts` with the imports.

## Folder Structure

```
src/assets/
├── logo/
│   └── logo.png              ← Your trust logo (44×44 px min, square)
├── hero/
│   └── hero-bg.jpg           ← Hero section background (1920×900 px recommended)
├── about/
│   └── about-photo.jpg       ← About section photo (~800×600 px)
├── programs/
│   ├── education.jpg
│   ├── healthcare.jpg
│   ├── women.jpg
│   ├── child.jpg
│   ├── livelihood.jpg
│   └── differently-abled.jpg ← Program card images (any landscape, ~600×400 px)
├── gallery/
│   ├── education-camp.jpg
│   ├── medical-drive.jpg
│   ├── womens-workshop.jpg
│   ├── child-welfare.jpg
│   ├── skill-training.jpg
│   └── community-meet.jpg    ← Event photos (~800×500 px landscape)
└── team/
    ├── founder.jpg
    ├── ananya.jpg
    └── ravi.jpg              ← Headshots (square, ~400×400 px)
```

## How to Wire Up an Image

1. Drop your image file into the correct sub-folder above.
2. Open `src/assets/index.ts`.
3. Uncomment (or add) the import line, for example:

```ts
import heroBg from "./hero/hero-bg.jpg";
export const heroBg: string = heroBg;  // remove the empty string default
```

That's it — the component will automatically switch from the emoji placeholder to your photo.