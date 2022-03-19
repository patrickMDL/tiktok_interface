import Layout from "../components/Layout";
import Feed from "../components/Feed";

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      {/* <Suggestions></Suggestions> */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: '/images/avatar.JPG',
        name: 'Patrick M. De Luca',
        username: 'henny_saron',
      },
      description: 'Descrição',
      tags: [{ titles: '#youtube' }, { titles: '#clone' }],
      songName: 'musica',
      videoUrl: 'video',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar: "/images/avatar.JPG",
        name: "Patrick M. De Luca2",
        username: "henny_saron2",
      },
      description: "Descrição2",
      tags: [{ titles: "#youtube2" }, { titles: "#clone2" }],
      songName: "musica2",
      videoUrl: "video2",
      likes: 750,
      comments: 10,
      replies: 50,
    }
  ];

  return {
    props: {
      posts: data,
    },
  };
}

export default Index;
