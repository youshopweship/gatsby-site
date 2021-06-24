import * as React from "react"
import { Link } from "gatsby"


const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-dark light bg-dark">
    <div class="container">
      <Link style={{ textDecoration: 'none', transform: `skewX(-20deg)`, }} to="/"><a href="." style={{ color: "#fff", backgroundColor: '#ef3d56', paddingLeft: '30px', paddingRight: '30px', fontWeight: 'bold' }} class="navbar-brand">You Shop We Ship</a></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <Link style={{ textDecoration: 'none' }} to="/eyes/"><a href="." class="nav-link">Eyes</a></Link>
          <Link style={{ textDecoration: 'none' }} to="/lips/" ><a href="." class="nav-link">Lips</a></Link>
          <Link style={{ textDecoration: 'none' }} to="/face/" ><a href="." class="nav-link">Face</a></Link>
          <Link style={{ textDecoration: 'none' }} to="/accessories/"><a href="." class="nav-link">Accessories</a></Link>
          <Link style={{ textDecoration: 'none' }} to="/blog/"><a href="." class="nav-link">Blog</a></Link>
        </ul>
        <div>
          <Link style={{ textDecoration: 'none' }} to="/"><a href="." style={{ color: 'white' }} class="nav-link">Cart</a></Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header













// orignal file
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
