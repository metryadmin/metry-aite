import {redirect} from 'next/navigation';

export default function CatchAllRedirect({
  params
}: {
  params: {slug: string[]};
}) {
  redirect(`/es/${params.slug.join('/')}`);
}
