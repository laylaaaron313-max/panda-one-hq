create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique,
  role text default 'agent',
  status text default 'training',
  created_at timestamptz default now()
);

create table courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  sort_order int default 0,
  published boolean default false,
  created_at timestamptz default now()
);

create table lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  video_url text,
  transcript text,
  sort_order int default 0,
  published boolean default false,
  created_at timestamptz default now()
);

create table quiz_questions (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references lessons(id) on delete cascade,
  question text not null,
  option_a text not null,
  option_b text not null,
  option_c text,
  option_d text,
  correct_answer text not null,
  required_acknowledgement boolean default false,
  created_at timestamptz default now()
);

create table lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  lesson_id uuid references lessons(id) on delete cascade,
  watched_percent numeric default 0,
  quiz_score numeric default 0,
  completed boolean default false,
  completed_at timestamptz,
  unique(user_id, lesson_id)
);

create table opportunities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  client text,
  pay text,
  daily_pay boolean default false,
  training_date text,
  description text,
  status text default 'open',
  published boolean default true,
  created_at timestamptz default now()
);

create table announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  priority text default 'info',
  published boolean default true,
  created_at timestamptz default now()
);

create table faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text default 'general',
  published boolean default true,
  created_at timestamptz default now()
);

create table support_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  subject text not null,
  category text,
  message text not null,
  status text default 'open',
  created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table courses enable row level security;
alter table lessons enable row level security;
alter table quiz_questions enable row level security;
alter table lesson_progress enable row level security;
alter table opportunities enable row level security;
alter table announcements enable row level security;
alter table faqs enable row level security;
alter table support_tickets enable row level security;

create policy "read published courses" on courses for select using (published = true);
create policy "read published lessons" on lessons for select using (published = true);
create policy "read published jobs" on opportunities for select using (published = true);
create policy "read published announcements" on announcements for select using (published = true);
create policy "read published faqs" on faqs for select using (published = true);
create policy "users read own progress" on lesson_progress for select using (auth.uid() = user_id);
create policy "users update own progress" on lesson_progress for all using (auth.uid() = user_id);
create policy "users read own profile" on profiles for select using (auth.uid() = id);
create policy "users update own profile" on profiles for update using (auth.uid() = id);
create policy "users create own tickets" on support_tickets for insert with check (auth.uid() = user_id);
create policy "users read own tickets" on support_tickets for select using (auth.uid() = user_id);
