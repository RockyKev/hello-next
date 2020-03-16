import Link from "next/link";

import Layout from "../components/Layout";
import StupidText from "../components/StupidText";

const PostLink = props => {
  const title = props.id.replace(/-/g, " ");

  return (
    <li>
      {/* <Link href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link> */}
      <Link href="/games/[id]" as={`/games/${props.id}`}>
        {/* <a>{props.id}</a> */}
        <a className="uppercase-text">{title}</a>
      </Link>

      <style jsx>{`
        .uppercase-text {
          text-transform: capitalize;
        }
      `}</style>
    </li>
  );
};

const Index = () => {
  return (
    <Layout>
      <StupidText />

      {/* <ul>
        <PostLink title="This is my first page" />
        <PostLink title="How to dance" />
        <PostLink title="Things I like to eat in Spokane" />
      </ul> */}

      <ul>
        <PostLink id="rage-2" />
        <PostLink id="outer-worlds" />
        <PostLink id="wolfenstein-new-blood" />
      </ul>
    </Layout>
  );
};

export default Index;
