import React from 'react'
import Seo from '../components/Seo'

const privacy_policy = () => {
    const item= {"attributes" : {
        title : "Privacy Policy",
        description : "Privacy Policy of Manuscripts.tech",
        metaDescription : "Privacy Policy of Manuscripts.tech"
      }}
    return (
        <div className='pt-16 px-6'>
            <Seo item={item}/>
            <h1 className='text-4xl text-center font-bold shadow-md mt-6 dark:text-neutral-200 mb-4'>Privacy Policy of <span className='decoration-red-500 underline text-blue-600 dark:text-blue-300'>Manuscripts.tech</span></h1>
            <h5 className='-mt-6 font-bold mb-6 text-center dark:text-white'>Company Name operates the Website Name website, which provides the SERVICE.</h5>
            <div>

                <ol className='dark:text-white'>
                    <li>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Website Name website.
                    </li>

                    <li>
                        If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    </li>

                    <li>
                        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Website URL, unless otherwise defined in this Privacy Policy.
                    </li>

                    <li>
                        <b>Information Collection and Use</b>:
                        For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you. We uses Google's Analytics to improve our services.
                    </li>

                    <li>

                        <b>Log Data</b>:
                        We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                    </li>

                    <li>


                        <b>Cookies</b>:
                        Our website uses these “cookies” to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.

                        Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
                        Service Providers
                        We may employ third-party companies and individuals due to the following reasons:

                        To facilitate our Service;
                        To provide the Service on our behalf;
                        To perform Service-related services; or
                        To assist us in analyzing how our Service is used.
                        We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                    </li>

                    <li>
                        Security :
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </li>

                    <li>
                        Links to Other Sites :
                        Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </li>

                    <li>
                        Children's Privacy :
                        Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
                    </li>

                    <li>
                        Changes to This Privacy Policy :
                        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                    </li>
                    <br />
                    Contact Us
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
                    <li>
                        <b>Primary</b>: manuscriptsofficial@gmail.com <br />
                        <b>Secondary</b> : manuscripts@manuscripts.tech
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default privacy_policy