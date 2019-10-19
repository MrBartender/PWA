import React, { Component } from 'react'

import { MDBContainer, MDBCard, MDBCardBody, MDBBtn } from 'mdbreact'
import SignOut from '../../core/components/SignOut'

class VendorStore extends Component {
  // componentDidMount() {
  // Get or create Vendor object
  // API.graphql({
  //   query: createVendor,
  //   variables: {
  //     input: { user: userId },
  //   },
  //   authMode: 'OPENID_CONNECT',
  // })
  //   .then(createResult => {
  //     setVendor(createResult.data.createVendor)
  //   })
  //   .catch(error => {
  //     console.error('Error creating vendor:', error)
  //   })
  // }

  render() {
    return (
      <MDBContainer fluid className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Become a Vendor
        </h2>

        <MDBCard pricing>
          <div className="peach-gradient white-text rounded-top">
            <h4
              className="option"
              style={{
                padding: '2.5rem',
                marginBottom: 0,
                fontWeight: 500,
              }}
            >
              Personal
            </h4>
          </div>
          <MDBCardBody className="striped orange-striped white-text card-background px-5">
            <h2 className="my-4 pb-3 h1">$899</h2>
            <ul>
              <li>
                <p>
                  <strong>1</strong> device
                </p>
              </li>
              <li>
                <p>
                  <strong>20+</strong> guests
                </p>
              </li>
              <li>
                <p>
                  <strong>50+</strong> drink recipes
                </p>
              </li>
              <li>
                <p>
                  <strong>1</strong> incredible event
                </p>
              </li>
            </ul>
            <MDBBtn rounded gradient="peach" className="mb-3 mt-3">
              Get Started
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <SignOut />
      </MDBContainer>
    )
  }
}

export default VendorStore
