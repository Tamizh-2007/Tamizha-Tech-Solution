create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  icon text,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  description text,
  image_url text,
  project_url text,
  github_url text,
  featured boolean default false,
  status text default 'draft',
  created_at timestamptz default now()
);

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  enquiry_id text unique not null,
  name text not null,
  email text not null,
  phone text not null,
  company text,
  service text,
  budget text,
  description text not null,
  status text default 'New',
  priority text default 'Normal',
  notes text,
  created_at timestamptz default now()
);

create table if not exists internships (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  duration text,
  eligibility text,
  responsibilities text,
  deadline date,
  applications_enabled boolean default true,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  internship_id uuid references internships(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  college text,
  course text,
  resume_url text,
  message text,
  created_at timestamptz default now()
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  organization text,
  testimonial text not null,
  profile_image_url text,
  published boolean default false,
  created_at timestamptz default now()
);

create table if not exists website_settings (
  id bigint primary key default 1,
  hero_heading text,
  hero_description text,
  about_description text,
  mission text,
  vision text,
  updated_at timestamptz default now()
);

create table if not exists contact_settings (
  id bigint primary key default 1,
  company_name text default 'Tamizha Tech Solution',
  ceo_name text default 'Tamizharasan',
  phone text default '8778029482',
  email text default 'tamizharasan740@gmail.com',
  updated_at timestamptz default now()
);