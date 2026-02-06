-- AI Trade School: Switch from subscriptions to one-time course purchases
-- Run this in your Supabase SQL Editor

-- ============================================
-- ADD PRICING COLUMNS TO TRACKS
-- ============================================
ALTER TABLE tracks ADD COLUMN IF NOT EXISTS price_cents INTEGER NOT NULL DEFAULT 0;
ALTER TABLE tracks ADD COLUMN IF NOT EXISTS stripe_price_id TEXT;
ALTER TABLE tracks ADD COLUMN IF NOT EXISTS price_label TEXT DEFAULT 'Free';

-- ============================================
-- PURCHASES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  track_id UUID NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  stripe_checkout_session_id TEXT,
  amount_cents INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'completed' CHECK (status IN ('pending', 'completed', 'refunded')),
  purchased_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, track_id)
);

-- ============================================
-- INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_purchases_user_id ON purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_purchases_track_id ON purchases(track_id);
CREATE INDEX IF NOT EXISTS idx_purchases_stripe_checkout ON purchases(stripe_checkout_session_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Users can read their own purchases
CREATE POLICY "Users can read own purchases" ON purchases
  FOR SELECT USING (auth.uid() = user_id);

-- Service role can insert purchases (for webhook handler)
CREATE POLICY "Service role can insert purchases" ON purchases
  FOR INSERT WITH CHECK (true);

-- Admins can read all purchases
CREATE POLICY "Admins can read all purchases" ON purchases
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Admins have full access to purchases
CREATE POLICY "Admins full access purchases" ON purchases
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ============================================
-- TRIGGERS
-- ============================================
CREATE TRIGGER update_purchases_updated_at
  BEFORE UPDATE ON purchases
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
