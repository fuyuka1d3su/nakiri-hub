import Button from "./Button";

interface ServiceProps {
  logo: string;
  url: string;
  name: string;
  color: string;
}

function Service(props: ServiceProps) {
  return (
    <>
      <div
        className="bg-[#201f20] rounded-xl flex p-10 items-center flex-col gap-5 mediaPanel"
        style={{
          border: `2px solid ${props.color}`,
        }}
      >
        <img
          src={props.logo}
          width="80px"
          alt=""
          className="p-2"
          draggable="false"
        />
        <p style={{ fontFamily: "Poppins-Medium", color: props.color }}>
          {props.name}
        </p>
        <Button url={props.url} color={props.color}/>
      </div>
    </>
  );
}

export default Service;
