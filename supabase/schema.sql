-- Run this in Supabase SQL Editor. Create admin users manually in Authentication > Users.
create extension if not exists pgcrypto;
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Residential Architecture',
  location text not null default 'Indore, Madhya Pradesh',
  description text not null default '',
  image_url text not null,
  featured boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.projects enable row level security;
drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects" on public.projects for select using (true);
drop policy if exists "Authenticated admins can insert projects" on public.projects;
create policy "Authenticated admins can insert projects" on public.projects for insert to authenticated with check (true);
drop policy if exists "Authenticated admins can update projects" on public.projects;
create policy "Authenticated admins can update projects" on public.projects for update to authenticated using (true) with check (true);
drop policy if exists "Authenticated admins can delete projects" on public.projects;
create policy "Authenticated admins can delete projects" on public.projects for delete to authenticated using (true);

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('project-images','project-images',true,10485760,array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;
drop policy if exists "Public can view project images" on storage.objects;
create policy "Public can view project images" on storage.objects for select using (bucket_id='project-images');
drop policy if exists "Authenticated admins can upload project images" on storage.objects;
create policy "Authenticated admins can upload project images" on storage.objects for insert to authenticated with check (bucket_id='project-images');
drop policy if exists "Authenticated admins can update project images" on storage.objects;
create policy "Authenticated admins can update project images" on storage.objects for update to authenticated using (bucket_id='project-images') with check (bucket_id='project-images');
drop policy if exists "Authenticated admins can delete project images" on storage.objects;
create policy "Authenticated admins can delete project images" on storage.objects for delete to authenticated using (bucket_id='project-images');
