# Banner Customization Dashboard

![Banner Preview](public/banner.png)

A React-based dashboard for creating customized banners with various styling options, built with Vite and TypeScript.

## Features

- **Style Selection**: Choose between image or color backgrounds
- **Image Upload**: Drag-and-drop or click-to-upload functionality
- **Overlay Controls**: Adjust opacity and background color
- **Text Customization**:
  - Title and description inputs
  - Real-time character counters
  - Typing indicators
- **Preset Management**: Pre-configured style combinations
- **Responsive Design**: Mobile-friendly interface

## Technologies

[![Tech Stack](https://skillicons.dev/icons?i=react,ts,vite,tailwind,nodejs)](https://skillicons.dev)

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 4
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

```bash
git clone https://github.com/spykelionel/frontend-microtask.git
cd frontend-microtask
npm install
# or
yarn
```

### Development

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── components/
│   ├── BannerStyleSelector/  # Style toggle buttons
│   ├── ImageUploader/        # Image upload component
│   ├── OverlayControls/      # Opacity slider and color picker
│   └── TextControls/         # Text input fields
├── hooks/
│   └── useBannerContext.ts   # Global state management
├── lib/
│   └── constants/           # Preset configurations
└── types/                   # TypeScript definitions
```

## Testing

### Run Tests

```bash
npm test
# or
yarn test
```

### Test Coverage

```bash
npm run coverage
# or
yarn coverage
```

#### Testing Strategy

| Component           | Test Coverage                             |
| ------------------- | ----------------------------------------- |
| BannerStyleSelector | Style updates, active state visualization |
| ImageUploader       | File validation, drag-and-drop handling   |
| OverlayControls     | Slider functionality, color picker        |
| TextControls        | Input validation, character counters      |

## Key Implementation Details

### State Management

```tsx
// Custom hook pattern for banner settings
const useBannerContext = () => {
  const [settings, setSettings] = useState<BannerSettings>(DEFAULT_SETTINGS);

  const updateSettings = (newSettings: Partial<BannerSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return { settings, updateSettings };
};
```

### Image Handling

```tsx
// Secure file upload implementation
const handleImageUpload = (file: File) => {
  if (!file.type.startsWith("image/")) {
    alert("Please upload an image file");
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    updateSettings({ backgroundImage: e.target?.result as string });
  };
  reader.readAsDataURL(file);
};
```

### Performance Optimization

```tsx
// Debounced input handling for text controls
const handleInputChange = useCallback(
  debounce((value: string) => {
    updateSettings({ customText: value });
  }, 300),
  []
);
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
