import * as React from "react"
import { Link } from "gatsby"
import { faShoppingCart, faGripLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const qty = useSelector(state => state.cart.items)
  return (
    < nav class="navbar navbar-expand-lg navbar-dark light bg-dark" >
      <div class="container">
        <Link
          style={{ textDecoration: 'none', transform: `skewX(-20deg)`, }}
          to="/"
        >
          <a
            href="."
            style={{ color: "#fff", backgroundColor: '#ef3d56', paddingLeft: '30px', paddingRight: '30px', fontWeight: 'bold' }}
            class="navbar-brand"
          >
            You Shop We Ship
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <FontAwesomeIcon size="1x" icon={faGripLines} />
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <Link style={{ textDecoration: 'none' }} to="/accessories/"><a href="." class="nav-link">Accessories</a></Link>
            <Link style={{ textDecoration: 'none' }} to="/eyes/"><a href="." class="nav-link">Eyes</a></Link>
            <Link style={{ textDecoration: 'none' }} to="/lips/" ><a href="." class="nav-link">Lips</a></Link>
            <Link style={{ textDecoration: 'none' }} to="/face/" ><a href="." class="nav-link">Face</a></Link>
            <Link style={{ textDecoration: 'none' }} to="/electronics/"><a href="." class="nav-link">Electronics</a></Link> */}

            <AniLink
              style={{ textDecoration: 'none' }}
              cover
              bg="#212529"
              to='/accessories/'
            >
              <a href="." class="nav-link">Accessories</a>
            </AniLink>

            <AniLink
              style={{ textDecoration: 'none' }}
              cover
              bg="#212529"
              to='/eyes/'
            >
              <a href="." class="nav-link">Eyes</a>
            </AniLink>


            <AniLink
              style={{ textDecoration: 'none' }}
              cover
              bg="#212529"
              to='/lips/'
            >
              <a href="." class="nav-link">Lips</a>
            </AniLink>

            <AniLink
              style={{ textDecoration: 'none' }}
              cover
              bg="#212529"
              to='/face/'
            >
              <a href="." class="nav-link">Face</a>
            </AniLink>

            <AniLink
              style={{ textDecoration: 'none' }}
              cover
              bg="#212529"
              to='/electronics/'
            >
              <a href="." class="nav-link">Electronics</a>
            </AniLink>


          </ul>

          <div>
            <AniLink
              paintDrip
              color="#212529"
              style={{ textDecoration: 'none' }}
              to="/cart/"
            >
              <a
                href="."
                style={{ color: 'white' }}
                class="nav-link"
              ><FontAwesomeIcon
                  size="2x"
                  icon={faShoppingCart}
                />
                {' '}<span style={{ fontSize: 20 }}>({qty.length})</span>
              </a></AniLink>
          </div>

        </div>
      </div>
    </nav >
  )
}

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
