import React from 'react'
import resume from './images/resume.png'

const MyResume = ()=>{
    return (
        <div className="MyResume" style={{backgroundImage:`url(${resume})`, backgroundSize:'cover'}}>



        </div>
    )



}
// import { Document, Page } from 'react-pdf'
// import myResume from './myResume.PDF'
 
// class MyResume extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages })
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div>
//         <Document
//           file='myResume'
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     )
//   }
// }
export default MyResume