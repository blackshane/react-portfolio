import pdf from '../images/Thomas-Shane-Black-Resume.pdf';

function Resume() {
  return (
    <>
      <div>Resume</div>
      <a href={pdf} download="Thomas-Shane-Black-Resume.pdf">Download my Resume Here</a>
    </>
  )
}

export default Resume