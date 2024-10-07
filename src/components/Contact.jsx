import { CONTACT } from "../constants" 

export const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
            <div className="text-center tracking-tighter">
                <a href="mailto:pachecomaldonadoivan@gmail.com" className="my-4 block">
                    {CONTACT.email}
                </a>
                <a href="wa.link/9hx7ez" className="my-4 block">
                    {CONTACT.phoneNo}
                </a>
                <p className="my-4">
                    {CONTACT.address}
                </p>
            </div>
        </div>
    )
}
