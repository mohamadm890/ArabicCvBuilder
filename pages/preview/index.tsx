import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/preview'), {
  ssr: false,
});

export default function PreviewPage() {
  return <DynamicComponent />;
}
