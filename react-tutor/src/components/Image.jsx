function Image(props) {
  console.log(props);
  return <img src={props.img} alt="emoji" />;
}

export default Image;
