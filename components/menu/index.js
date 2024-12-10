import Link from 'next/link';

export default function Menu() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Link href='/'>Home</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/users'>Users</Link>
    </div>
  );
}
