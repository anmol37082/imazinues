# Responsive / Desktop Scaling Issues

Ye file sirf audit ke liye hai. Isme un CSS/layout issues ka summary hai jo large desktop ya wide Mac screens par site ko "small" feel kara sakte hain.

## Main Problem

Project me kaafi jagah `max-width`, fixed `min()` caps, aur `clamp()` ke upper limits use huye hain. Iska result ye hota hai ki screen badi hone par bhi layout grow nahi karta, bas center me same size par rehta hai.

## Observed Issues

### 1. Global layout fluid nahi hai

- `src/app/globals.css` me `html, body { max-width: 100vw; overflow-x: hidden; }` hai.
- Ye directly scaling bug nahi hai, lekin overflow ko hide karta hai aur wide layouts me natural spill/resize signals ko mask kar sakta hai.

### 2. Services section desktop par hard-capped hai

`src/features/home/components/Services.module.css`

- `.gridDesktop` `max-width: 1270px` par cap hai.
- `.intro` `max-width: 860px` par cap hai.
- `.subtitle` `max-width: 460px` par cap hai.
- `.content` `max-width: 390px` par cap hai.
- `.image` `width: min(220px, 100%)` use karta hai.
- `title` aur `cardTitle` me `clamp()` hai, jiska upper limit fixed hai.

Impact:
- Large desktop par cards aur typography aur expand nahi karte.
- Section intentionally wide screen pe bhi same compact feel deta hai.

### 3. Work hero section also capped

`src/features/works/components/WorkHero.module.css`

- `.inner` `width: min(1480px, calc(100% - 40px))` use karta hai.
- `.copy` `max-width: 920px` hai.
- `.title` `clamp(3.3rem, 6.1vw, 6.9rem)` se capped hai.
- `.description` `max-width: 480px` hai.

Impact:
- Ultra-wide desktop par hero content increase nahi hota.
- Layout centered aur relatively small dikhta hai.

### 4. Work gallery section fixed-width feel deta hai

`src/features/works/components/WorkGalleryShowcase.module.css`

- `.inner` `width: min(1480px, calc(100% - 40px))`.
- `.banner` `min-height: 680px`.
- `.card` `min-height: 640px`.

Impact:
- Badi screens par image blocks same dimensions me rehte hain.
- Scale-up behavior nahi hai, sirf fixed presentation hai.

### 5. More projects section bhi capped hai

`src/features/works/components/WorkMoreProjectsSection.module.css`

- `.inner` `width: min(1480px, calc(100% - 40px))`.
- `.rightPane` `width: min(100%, 360px)`.
- `.title` aur card text me `clamp()`/caps lage huye hain.

Impact:
- Wide desktop par section ka content aur spread nahi hota.
- Visual size largely same rehta hai.

### 6. Header scaling intentionally reduce ho rahi hai

`src/features/navigation/components/Header.module.css`

- `@media (max-width: 1440px)` par `transform: scale(0.9)`.
- `@media (max-width: 1240px)` par `transform: scale(0.88)`.
- `@media (max-width: 980px)` par `transform: scale(0.86)`.
- Mobile-side rules me aur bhi smaller scaling dikhti hai.

Impact:
- Window width badalne par header extra shrink ho sakta hai.
- Ye site ko overall less "responsive-grow" feel de sakta hai.

### 7. Desktop typography mostly capped hai

Multiple files me `clamp()` use hua hai:

- `src/features/home/components/Hero.module.css`
- `src/features/works/components/WorkHero.module.css`
- `src/features/works/components/WorkFooter.module.css`
- `src/features/works/components/WorkImpactSection.module.css`
- `src/features/works/components/WorkStudyDetailsSection.module.css`
- `src/features/home/components/LatestWorksSection.module.css`
- `src/features/home/components/ResultsHighlightSection.module.css`
- `src/features/home/components/StatsAndFacts.module.css`

Impact:
- Fonts wide monitors par upper bound hit kar lete hain.
- Text size desktop par proportionally grow nahi karta.

## Likely Root Cause

Issue ka main root cause ye hai:

1. Bahut saare containers `max-width` se locked hain.
2. Typography `clamp()` ke upper limits par cap hai.
3. Kuch sections me header ya layout `transform: scale()` se aur shrink ho raha hai.

Isliye large Mac / wide PC screens par site "adjust" hone ke bajay same fixed desktop size me centered dikhti hai.

## What I Checked

- `src/app/layout.js`
- `src/app/globals.css`
- `src/features/home/components/Services.module.css`
- `src/features/home/components/Hero.module.css`
- `src/features/works/components/WorkHero.module.css`
- `src/features/works/components/WorkGalleryShowcase.module.css`
- `src/features/works/components/WorkMoreProjectsSection.module.css`
- `src/features/navigation/components/Header.module.css`

## Note

Ye report sirf issue identification hai. Abhi koi code change nahi kiya gaya.
