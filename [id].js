const blogPosts = [
  {
    id: "1",
    title: "Understanding Next.js",
    content: "Next.js is a React framework for production..."
  },
  {
    id: "2",
    title: "Why Tailwind CSS is Awesome",
    content: "Tailwind CSS allows rapid UI development..."
  },
  {
    id: "3",
    title: "Static Generation in Next.js",
    content: "Static Generation improves performance and SEO..."
  }
];

export default function BlogDetails({ post }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.id === params.id);

  return {
    props: { post },
  };
}
