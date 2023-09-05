interface HeadingTextProps {
  children: React.ReactNode;
}

const HeadingText: React.FC<HeadingTextProps> = (props) => {
  const { children } = props;
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold capitalize">
      {children}
    </h1>
  );
};

export default HeadingText;
