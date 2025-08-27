# AS Furniture & CNC Design Portfolio

A modern portfolio website built with Next.js 15 App Router and Tailwind CSS v2.2.19 showcasing custom furniture and CNC design projects.



## Features
- App Router structure (`app/`)
- Tailwind v2 custom theme colors
- Responsive navigation bar & footer
- Hero section with dynamic 3D model viewer (`@react-three/fiber` + `drei`)
- Work page with custom sliding window carousel (touch + arrows)
- Contact page with actionable buttons (Call, WhatsApp)
- Accessible, semantic components and smooth transitions

## Development
Install dependencies and start dev server:

```bash
npm install
npm run dev
```

Add your images under `public/images` and optionally replace the placeholder 3D geometry in `components/ModelViewer.tsx` with an imported GLTF/GLB model using `GLTFLoader` or `<primitive />` + `useGLTF` from `drei`.

## Replacing 3D Placeholder
Example snippet:
```tsx
// inside Suspense
const { scene } = useGLTF('/models/your-model.glb');
<primitive object={scene} />
```

## License
MIT
