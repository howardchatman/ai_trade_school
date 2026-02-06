# AI Trade School

A production-ready membership-based trade school platform for AI education. Built with Next.js 14, TypeScript, TailwindCSS, shadcn/ui, Supabase, and Stripe.

## Features

- **Marketing Site**: Public pages for homepage, tracks, certifications, and about
- **Authentication**: Email/password + magic link via Supabase Auth
- **Student Dashboard**: Track progress, view lessons, earn certifications
- **Content Gating**: Tier-based access (Operator, Builder, All Access)
- **Stripe Integration**: Subscriptions, checkout, webhooks, customer portal
- **Admin CMS**: Full CRUD for tracks, modules, lessons, and users
- **Dark Theme**: Luxury minimal design with subtle texture

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Database**: Supabase (Postgres)
- **Auth**: Supabase Auth
- **Payments**: Stripe
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account
- Stripe account

### 1. Clone and Install

```bash
cd ai_trade_school
npm install
```

### 2. Set Up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration:
   - Copy contents of `supabase/migrations/001_initial_schema.sql`
   - Paste and run in SQL Editor
3. (Optional) Run seed data:
   - Copy contents of `supabase/seed.sql`
   - Paste and run in SQL Editor
4. Get your API keys from Settings > API:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### 3. Set Up Stripe

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Create 3 subscription products/prices:
   - Operator ($49/month)
   - Builder ($99/month)
   - All Access ($149/month)
3. Get your keys from Developers > API Keys:
   - `STRIPE_SECRET_KEY`
4. Set up webhook:
   - Go to Developers > Webhooks
   - Add endpoint: `https://your-domain.com/api/stripe/webhook`
   - Select events:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Get `STRIPE_WEBHOOK_SECRET`

### 4. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Make Yourself an Admin

After signing up, run this SQL in Supabase:

```sql
UPDATE profiles SET role = 'admin' WHERE email = 'your-email@example.com';
```

Now you can access `/admin` to manage content.

## Project Structure

```
ai_trade_school/
├── src/
│   ├── app/
│   │   ├── (public)/           # Public marketing pages
│   │   ├── (auth)/             # Authenticated student pages
│   │   ├── (admin)/            # Admin dashboard
│   │   └── api/                # API routes (auth, stripe)
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Header, footer, sidebars
│   │   ├── auth/               # Login/signup forms
│   │   ├── dashboard/          # Dashboard components
│   │   └── admin/              # Admin components
│   ├── lib/
│   │   ├── supabase/           # Supabase clients
│   │   └── stripe/             # Stripe utilities
│   ├── actions/                # Server actions
│   ├── types/                  # TypeScript types
│   └── middleware.ts           # Route protection
├── supabase/
│   ├── migrations/             # Database schema
│   └── seed.sql                # Sample data
└── public/
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Stripe Webhook for Production

Update your Stripe webhook URL to your production domain:
`https://aitradeschool.org/api/stripe/webhook`

## Smoke Test Checklist

After deployment, verify:

### Authentication
- [ ] Sign up with email/password
- [ ] Sign in with email/password
- [ ] Magic link login
- [ ] Protected routes redirect to login
- [ ] Admin routes only accessible to admins
- [ ] Sign out works

### Public Pages
- [ ] Homepage loads correctly
- [ ] Tracks page shows published tracks
- [ ] Certifications page works
- [ ] About/Founders page works

### Student Dashboard
- [ ] Dashboard shows progress stats
- [ ] Tracks display with progress
- [ ] Lesson detail page works
- [ ] Progress tracking updates
- [ ] Certification progress shows

### Stripe
- [ ] Checkout redirects to Stripe
- [ ] Successful payment updates tier
- [ ] Webhook updates profile
- [ ] Customer portal accessible

### Content Gating
- [ ] Free lessons accessible to all
- [ ] Operator lessons require operator/all_access
- [ ] Builder lessons require builder/all_access
- [ ] Locked content redirects to billing

### Admin
- [ ] Admin dashboard loads
- [ ] Create/edit/delete tracks
- [ ] Create/edit/delete modules
- [ ] Create/edit/delete lessons
- [ ] View/manage users

## Subscription Tiers

| Tier | Access |
|------|--------|
| Free | Free preview lessons only |
| Operator | Operator track lessons |
| Builder | Builder track lessons |
| All Access | Everything |

## Content Model

```
Tracks
  └── Modules
       └── Lessons

Certifications
  └── required_lesson_ids (JSON array)
```

## License

MIT
