import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../config/site";

export default function FloatingWhatsapp(){

return(

<a

href={`https://wa.me/${SITE.whatsapp.replace(/\D/g,"")}`}

target="_blank"

className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl hover:scale-110 transition"

>

<FaWhatsapp/>

</a>

)

}