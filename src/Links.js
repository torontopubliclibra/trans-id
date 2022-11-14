import { useState } from "react";

const Links = () => {

    const [ province, setProvince ] = useState("")
    
    const ontarioLinks = (
        <div className="linksAndResources">
            <h3>Name Changes</h3>
            <ul>
                <li><a href="https://www.ontario.ca/page/change-name" target="_blank" rel="noreferrer">Ontario Name Change Info</a></li>
                <li><a href="http://www.forms.ssb.gov.on.ca/mbs/ssb/forms/ssbforms.nsf/GetFileAttach/007-11155E~3/$File/11155E.pdf" target="_blank" rel="noreferrer">Ontario Name Change Application</a></li>
                <li><a href="http://www.forms.ssb.gov.on.ca/mbs/ssb/forms/ssbforms.nsf/GetFileAttach/007-11320E~1/$File/11320E.pdf" target="_blank" rel="noreferrer">Request for Non-Publication in Ontario Gazette</a></li>
            </ul>
            <h3>Health Card Updates</h3>
            <ul>
                <li><a href="https://www.ontario.ca/page/replace-cancel-or-change-information-your-health-card" target="_blank" rel="noreferrer">Ontario Health Card Name Update Info</a></li>
                <li><a href="https://forms.mgcs.gov.on.ca/en/dataset/7918268c-820f-4bb7-99e6-a9f187745cd0/resource/1944dd02-6645-4915-a978-60d2dc652fed/download/0280-82e.pdf" target="_blank" rel="noreferrer">Ontario Health Card Name Update Application</a></li>
            </ul>
            <h3>Gender Marker Changes</h3>
            <ul>
                <li><a href="https://www.ontario.ca/page/changing-your-sex-designation-your-birth-registration-and-birth-certificate" target="_blank" rel="noreferrer">Ontario Birth Certificate Sex Designation Change Info</a></li>
                <li><a href="file:///Users/danateagle/Downloads/11331E.pdf" target="_blank" rel="noreferrer">Sex Designation Change Application</a></li>
            </ul>
            <h3>Passport Updates</h3>
            <ul>
                <li><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-passports/change-sex.html" target="_blank" rel="noreferrer">Canada Passport Gender Marker Update Info</a></li>
                <li><a href="https://www.canada.ca/content/dam/ircc/migration/ircc/english/passport/forms/pdf/pptc643-eng.pdf" target="_blank" rel="noreferrer">Canada Passport Gender Marker Update Application</a></li>
            </ul>
            <h3>Canadian SIN Updates</h3>
            <ul>
                <li><a href="file:///Users/danateagle/Downloads/GC-NAS2120.pdf" target="_blank" rel="noreferrer">Social Insurance Number Information Change Application</a></li>
            </ul>
        </div>
    )

    return (
        <main>
            <h2>Links and Resources</h2>
            <div className="provinceSelect">
                <label for="provinces" className="sr-only">Select a province:</label>
                <select name="provinces" id="provinces" value={province} onChange={(event) => {setProvince(event.target.value)}}>
                    <option value="">Select a province</option>
                    <option value="ontario">Ontario</option>
                </select>
            </div>
            {
                province === "ontario"
                ? ontarioLinks
                : null
            }
        </main>
    )
}

export default Links;