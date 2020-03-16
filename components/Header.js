import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a className="link-style">Home</a>
      </Link>

      <Link href="/about">
        <a className="link-style">About</a>
      </Link>

      <Link href="/shows">
        <a className="link-style">Shows</a>
      </Link>

      <style jsx>
        {`
          div {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .link-style {
            margin-right: 15px;
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
