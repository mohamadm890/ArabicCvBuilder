"use client";
import { Button, Card } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';

function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '');
}

function getPreview(html: string, maxLength = 140) {
  const text = stripHtml(html);
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

const PostCard = ({ post }: { post?: any }) => {
  const preview = getPreview(post?.contentHtml ?? '');
  const router = useRouter();

  if (!post) {
    // Optional: show a loading or fallback UI if post is missing
    return <div>Loading...</div>;
  }

  return (
    <Card.Root width="320px" colorPalette="gray" bg="white" borderRadius="24px" border="solid 1px #C8C8C8">
      <Card.Body gap="2">
        <Card.Title mt="2" color="gray.800" fontWeight="800">{post.frontmatter.title} </Card.Title>
        <Card.Description>
          {preview}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button
          onClick={() => router.push(`/blogs/${post.slug}`)}
          _hover={{
            background: '#167FFC',
            color: 'white',
            boxShadow: 'none',
          }}
          boxShadow="none"
          variant="outline"
          color="#167FFC"
          borderRadius="24px"
          border="solid 1px #D5D5D5"
          height="40px"
          width="full"
        >
          عرض التفاصيل
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default PostCard;
