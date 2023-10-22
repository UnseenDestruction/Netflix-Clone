const Footer = () => {

    return(
        <div className="bg-black text-white p-10 footer">
            <div className="display grid grid-cols-4 grid-rows-8 underline text-center">
            <div>
                <ul className="display grid gap-3">
                    <li className="cursor-pointer">Questions? Contact us.</li>
                    <li className="cursor-pointer">FAQ</li>
                    <li className="cursor-pointer">Invenstors Release</li>
                    <li className="cursor-pointer">Ways to Watch</li>
                    <li className="cursor-pointer">Corporate Information</li>
                    <li className="cursor-pointer">Only on Netflix</li>
                    <li className="border rounded-lg text-white p-2  text-center no-underline w-[30%] ml-[35%] en">English</li>
                    <li className="cursor-pointer">Netflix Philipines</li>
                    <li className="cursor-pointer">Coded by: Geric Augusto</li>
                </ul>
            </div>
            <div className="">
                <ul className="display grid gap-3">
                    <li className="cursor-pointer">Help Center</li>
                    <li className="cursor-pointer">Jobs</li>
                    <li className="cursor-pointer">Terms of Use</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className="">
                <ul className="display grid gap-3">
                    <li className="cursor-pointer">Account</li>
                    <li className="cursor-pointer">Redeem Gift Cards</li>
                    <li className="cursor-pointer">Privacy</li>
                    <li className="cursor-pointer">Speed Test</li>
                </ul>
            </div>
            <div className="">
                <ul className="display grid gap-3">
                    <li className="cursor-pointer">Media Center</li>
                    <li className="cursor-pointer">Buy Gift Cards</li>
                    <li className="cursor-pointer">Cookie Preferences</li>
                    <li className="cursor-pointer">Legal Notices</li>
                </ul>
            </div>
            </div>
        </div>
    )
}


export default Footer;