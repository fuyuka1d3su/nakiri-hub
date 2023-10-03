import Logo from "../assets/logo.png"

interface NakiriLogoProps {
    size: string
}


function NakiriLogo(props: NakiriLogoProps) {
    return (
        <>
        <img src={Logo} alt="" height={props.size} width={props.size}/>
        </>
    )
}

export default NakiriLogo;