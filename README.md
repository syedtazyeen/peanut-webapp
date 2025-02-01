# Peanut - Project management saas

**🚧 This project is under development 🚧**

A project management platform built with **Next.js** and **Supabase**, inspired by Notion, for managing projects, tasks, and notes.


#### Test user
```bin
   email: user1@test.com  
password: Test@123
```


## Features
- **User Authentication** with Supabase
- **Real-time Collaboration** on projects and tasks
- **Task Management** (create, update, organize)
- **Rich-text Notes** editor
- **File Storage** using Supabase Storage

## Tech Stack
- **Next.js**
- **Supabase** (Authentication, Database, Storage)
- **Tailwind CSS**

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/syedtazyeen/peanut-webapp.git
   cd peanut-webapp
   ```

2. Install dependencies with **pnpm**:
   ```bash
   pnpm install
   ```

3. Add Supabase keys to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Run the app:
   ```bash
   pnpm dev
   ```

Access the app at [http://localhost:3000](http://localhost:3000).

## License

MIT License.