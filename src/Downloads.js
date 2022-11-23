// import logo image
import TFACpdf from './assets/tfac-nov24.pdf';

const Downloads = () => {
    return (
        <main className="downloads">
            <h2>Downloads</h2>
            <h4>CUPE 3903 TFAC Presentation</h4>
            <h5>Ontario Trans I.D. - Nov 24, 2022</h5>
            <a className="button" href={TFACpdf} target="_blank" rel="noreferrer">Download PDF</a>
        </main>
    )
}

export default Downloads;