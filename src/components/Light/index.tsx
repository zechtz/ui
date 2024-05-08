type Props = {
  variant: "green" | "yellow" | "red";
};

const Light = ({ variant = "green" }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 20,
        height: 20,
      }}
    ></div>
  );
};
export default Light;
