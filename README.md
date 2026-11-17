# Shree Bhargava Cinematic Website

Premium-light architecture studio website built with Next.js 14, React, TypeScript and Tailwind CSS. Includes a Supabase-backed admin area for uploading and managing featured project photos.

## 1. Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The homepage has sample portfolio imagery until Supabase is configured and projects are added. Replace the sample Unsplash photos with the firm's own approved project photos before launch.

## 2. Configure editable admin

1. Create a project at https://supabase.com.
2. In Supabase SQL Editor, run `supabase/schema.sql`.
3. In Supabase Authentication settings, disable public sign-ups.
4. Create the owner/admin user manually in Authentication > Users.
5. Copy the Project URL and anon/public key into `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

6. Restart the dev server. Visit `/admin/login` and sign in with the admin user.
7. Add projects and upload project images. Mark projects as featured to show them on the homepage.

**Security note:** Never put the Supabase service-role key in a `NEXT_PUBLIC_` variable or browser code. Public sign-ups should stay disabled. For a multi-person admin team, add an explicit admin-role table/policy before issuing accounts to staff.

## 3. Add the firm's real logo and photography

- Replace the temporary circular “SB” monogram in `components/Header.tsx` with the approved Shree Bhargava logo asset.
- Replace the sample hero and philosophy image URLs in `app/page.tsx` with approved firm photography.
- Add image records via the admin panel for portfolio projects.
- Keep image files optimized (WebP/AVIF preferred, ideally under 500 KB each).

## 4. Cinematic video upgrade

Only photos are currently available, so the hero uses a slow image zoom and layered gradient. When an approved hero video is ready, add `public/videos/hero.mp4` and replace the hero `<img>` in `app/page.tsx` with a muted, autoplay, loop, playsInline `<video>` plus a poster image. Keep a still-image fallback for mobile and reduced-motion users.

## 5. Deploy

Push the project to a private GitHub repository, import it into Vercel, add the same environment variables in Vercel Project Settings, and deploy. Connect the firm's domain after testing the production build.

## Notes before public launch

- Confirm legal business name, logo, phone, email, office address and service locations.
- Replace placeholder portfolio images and sample project text with real approved projects.
- Add a proper enquiry form endpoint/email integration and privacy policy.
- Review SEO titles, descriptions, Open Graph image, sitemap and robots before launch.
