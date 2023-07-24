import Image from "next/image";

export default function Background() {
    return(
       <Image 
            src={"https://cdn.wallpapersafari.com/56/26/pXciAE.jpg"}
            fill
            alt="background"
            className="-z-50 opacity-30 object-cover"
       /> 
    )
}