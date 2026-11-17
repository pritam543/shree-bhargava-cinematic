import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const hasSupabase = Boolean(url && key);
export const supabase = hasSupabase ? createClient(url!, key!) : null;

export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image_url: string;
  featured: boolean;
  created_at?: string;
};
