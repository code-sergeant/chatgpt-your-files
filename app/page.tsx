import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';

export default async function Index() {
  const cookeStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookeStore });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-14 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          
          {user ? (
            <div className="flex flex-row gap-2">
              <Link
                href="/files"
                className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background"
              >
                Upload
              </Link>
              <Link
                href="/chat"
                className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background"
              >
                Chat
              </Link>
            </div>
          ) : (
            <div className="flex flex-row gap-2">
              <Link
                href="/login"
                className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background"
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    </div>
  );
}
