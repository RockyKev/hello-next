import Header from "./Header";

const Layout = props => {
  return (
    <div className="layout-style">
      <Header />
      {props.children}

      <style jsx>
        {`
          .layout-style {
            margin: 20px;
            padding: 20px;
            border: 2px solid green;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
