'use client';

import { UserButton, useUser } from "@stackframe/stack";
import Link from 'next/link';

export default function ClientNavBar() {
  const user = useUser();

  return (
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <span className="text-purple-200 text-sm">
            欢迎, {user.displayName || '魔法师'}
          </span>
          <UserButton />
        </>
      ) : (
        <Link 
          href="/handler/sign-in"
          className="magic-button py-2 px-4 text-sm"
        >
          登录
        </Link>
      )}
    </div>
  );
}

