import Button from "./Button"

interface ServiceProps {
    logo: string,
    url: string,
    name: string
}

function Service(props: ServiceProps) {
    return (
        <>
        <div className="bg-[#201f20] rounded-xl flex p-10 items-center flex-col gap-5 mediaPanel text-white">
            <img src={props.logo} width="80px" alt="" className="p-2"/>
            <p style={{fontFamily: "Poppins-Medium"}}>{props.name}</p>
            <Button url={props.url}/>
        </div>  
        </>
    )
}

export default Service;