const StupidText = props => {
  console.log(props);
  return (
    <p className="link-style">This is a stupid text about {props.animal}. </p>
  );
};

export default StupidText;
