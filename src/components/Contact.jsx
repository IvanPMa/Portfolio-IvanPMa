import { CONTACT } from "../constants" 

export const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <a href="mailto:pachecomaldonadoivan@gmail.com" className="my-4 block">
                    {CONTACT.email}
                </a>
                <a href="https://api.whatsapp.com/send?phone=525539763601&text=Hi%20Iv%C3%A1n!%20%F0%9F%91%8B%2C%20I%20have%20seen%20your%20portfolio%20and%20I%20found%20your%20profile%20relevant%20for%20a%20vacancy%20we%20have." className="my-4 block">
                    {CONTACT.phoneNo}
                </a>
                <p className="my-4">
                    {CONTACT.address}
                </p>
            </div>
        </div>
    )
}
