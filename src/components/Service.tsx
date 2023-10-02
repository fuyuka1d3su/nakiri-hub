interface ServiceProps {
    logo: string,
    url: string
}

function Service(props: ServiceProps) {
    return (
        <>
        <h1>{props.logo}</h1>  
        </>
    )
}

export default Service;