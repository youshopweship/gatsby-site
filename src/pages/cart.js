import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct } from '../store/cart.slice'
import { navigate } from 'gatsby'
import { faLongArrowAltLeft, faTrash, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './cart.css'
import { Modal, Button } from 'react-bootstrap'


const MyModal = props => {
  const [finalMsg, setFinalMsg] = React.useState()
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: '#212529' }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          value={props.address}
          onChange={e => {
            props.setAddress(e.target.value)
          }}
          placeholder="Enter your complete address"
          style={{ width: '100%' }} />

      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={props.address === '' ? true : false}
          style={{ backgroundColor: '#4a4e69', borderColor: '#4a4e69' }}
          onClick={() => {
            let order = props.whatsappMsg
            let adrs = props.address
            let msg = `${order}\nAddress: ${adrs}`
            msg = encodeURI(msg)
            console.log(msg);
            setFinalMsg(msg)

            props.onHide()
            props.setAddress('')
          }}
        >
          <a
            style={{ textDecoration: 'none', color: '#fff' }}
            href={`https://wa.me/923045681874?text=${finalMsg}`}
          >
            Order Now
          </a>
        </Button>
      </Modal.Footer>
    </Modal >
  )
}


const Cart = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [address, setAddress] = React.useState('')

  // const contact = 923045681874
  const [whatsappMsg, setWhatsappMsg] = React.useState()
  const [qulPaisay, setQulPaisay] = React.useState(0)
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  React.useEffect(() => {
    let charges = 0
    const subTotal = () => {
      cart.map(item => charges += (item.price * item.quantity))
      setQulPaisay(charges)
    }
    subTotal()
  })


  return (
    <div style={{ backgroundColor: '#f0f5f6', height: '100vh', fontFamily: 'Rajdhani, serif' }}>
      <div className="container-fluid justify-content-center text-center">
        <div className="row pt-3">

          <div className="col">

            <button
              onClick={() => navigate('/')}
              className="icon"
              style={{ backgroundColor: '#f0f5f6', border: 'none', fontWeight: 'bold' }}
            ><span><FontAwesomeIcon icon={faLongArrowAltLeft} color={'#52b7f6'} size={'1x'} /></span>
              Go Back
            </button>

          </div>

          <h4 className="col">
            <FontAwesomeIcon icon={faShoppingBasket} color={'#52b7f6'} size={'1x'} />
          </h4>
        </div>
      </div>
      <p className="text-center">Cart Summary</p>








      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyModal
        whatsappMsg={whatsappMsg}
        setWhatsappMsg={setWhatsappMsg}
        address={address}
        setAddress={setAddress}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {
        cart.length > 0 ?
          <div className="container">
            {cart.map(item => (
              <div className="mb-2">
                <div className="row bg-light p-4 pb-0">
                  <h4 className="col text-start" style={{ fontFamily: 'Lato, serif' }}>{item.title} </h4>


                  <div className="col d-flex justify-content-end">
                    <button
                      style={{ border: "none", backgroundColor: '#f8f9fa' }}
                      onClick={() => { dispatch(removeProduct(item.title)) }}
                    >
                      <FontAwesomeIcon size="1x" className="icon" icon={faTrash} color={'#db3f3d'} />
                    </button>
                  </div>

                </div>
                <div className="row bg-light p-4 pt-0 pb-0">
                  <div style={{ fontWeight: 'bold' }} className="col text-end">x{item.quantity}</div>
                </div>

                <div className="row bg-light p-4 pt-1">
                  <div className="col text-end"> Price: {item.price * item.quantity}/- </div>
                </div>

              </div>
            ))}
          </div> : <h2 className="text-center mt-5 pt-5">Your cart is Empty!</h2>
      }

      <div className="container">
        {qulPaisay > 0 &&
          <h4 className="text-end">Total: {qulPaisay}/-</h4>
        }
      </div>

      <div className="container text-end">

        {qulPaisay > 0 &&
          <>
            <button
              onClick={() => {
                let items = `Hello, I want to place order for the following items\n\n`
                cart.map(item => items += `${item.title}. (qty: x${item.quantity}, price: ${item.quantity * item.price})\n`)
                items += `\nTotal Amount including delivery charges: Rs-${qulPaisay + 200}/-`
                setWhatsappMsg(items)

                setModalShow(true)
              }}
              className="btn" style={{ backgroundColor: '#5BD140', borderRadius: '40px', color: '#fff' }}
            >
              ORDER ON WHATSAPP
            </button>

            <p className="mb-5 pb-5"><em><small>*Rs-200/- delivery charges.</small></em></p>
          </>
        }
      </div>
    </div >
  )
}

export default Cart
