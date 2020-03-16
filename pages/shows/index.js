import Link from "next/link";
import fetch from "isomorphic-unfetch";

import Layout from "../../components/Layout";

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

// const Index = props => {
//   return (
//     <Layout>
//       <h1>Batman TV Shows </h1>
//       <ul>
//         {props.shows.map(show => (
//           <li key={show.id}>
//             <Link href="/shows/[id]" as={`/shows/${show.id}`}>
//               <a>{show.name}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// };

const Index = props => {
  return (
    <Layout>
      <h1>Pokemon Games </h1>
      <ul>
        {props.games.map(game => (
          <li key={game.id}>
            <Link href="/shows/[id]" as={`/shows/${show.id}`}>
              <a>{game.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

Index.getInitialProps = async function() {
  //   const res = await fetch(
  //     `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&resources=game&query=Pokemon`
  //   );
  const data = await res.json();

  console.log(data.results.length);
  console.log("data", data.results);

  return {
    games: data.results.map(...entry)
  };
};

export default Index;
