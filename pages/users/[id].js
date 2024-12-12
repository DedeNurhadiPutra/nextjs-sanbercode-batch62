import Layout from '@/layout';
import { useRouter } from 'next/router';

export default function UserByName() {
  const router = useRouter();
  const { id } = router?.query;

  return (
    <Layout>
      <p>UserByName {id}</p>
    </Layout>
  );
}
