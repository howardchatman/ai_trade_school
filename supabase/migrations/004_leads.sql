-- AI Trade School: Email lead capture table
-- Run this in your Supabase SQL Editor

-- ============================================
-- LEADS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'popup',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Server actions / service role can insert leads
DROP POLICY IF EXISTS "Service can insert leads" ON leads;
CREATE POLICY "Service can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Admins can read all leads
DROP POLICY IF EXISTS "Admins can read leads" ON leads;
CREATE POLICY "Admins can read leads" ON leads
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );
