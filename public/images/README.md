# Images Folder Structure

## Folder Organization:

### 📁 `/public/images/hero/`
**Hero section ke liye photos:**
- hero-bg.jpg (Main background image for hero section)
- construction-bg.jpg (Alternative background)
- building-hero.jpg (Modern building image)

### 📁 `/public/images/services/`
**Services section ke liye photos:**
- structural-design.jpg (Structural design service image)
- structural-analysis.jpg (Analysis service image)
- drafting-services.jpg (Drafting service image)
- site-supervision.jpg (Site supervision image)
- structural-audit.jpg (Audit service image)

### 📁 `/public/images/projects/`
**Projects section ke liye photos:**
- project-1.jpg
- project-2.jpg
- project-3.jpg
- project-4.jpg
- project-5.jpg
- project-6.jpg
(Add your completed project photos here)

### 📁 `/public/images/about/`
**About section ke liye photos:**
- team-photo.jpg (Team ka group photo)
- office-photo.jpg (Office ka photo)
- equipment-photo.jpg (Engineering equipment photo)
- philosophy-image.jpg (Company philosophy image)

## Image Guidelines:

### Recommended Image Sizes:
- **Hero Background**: 1920x1080px or higher
- **Service Images**: 400x300px
- **Project Images**: 600x400px
- **About Images**: 500x350px

### File Formats:
- Use .jpg for photos
- Use .png for images with transparency
- Keep file sizes under 500KB for better loading speed

### File Naming:
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Use descriptive names

## How to Use Images in Code:

```jsx
// Hero section background
background-image: url('/images/hero/hero-bg.jpg')

// Service images
<img src="/images/services/structural-design.jpg" alt="Structural Design" />

// Project images
<img src="/images/projects/project-1.jpg" alt="Project Name" />

// About images
<img src="/images/about/team-photo.jpg" alt="Our Team" />
```

## Notes:
- Images in `public` folder can be accessed directly with `/images/...`
- Make sure image names match exactly with the code
- Test images after adding to ensure they load properly
