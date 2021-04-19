import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { connect } from "react-redux";
import CommonHelper from '../common/utils';
import '../style/AddProduct.css';
import taskList from '../components/task';

import UniqueInput from '../components/task';

const Helper = new CommonHelper();
const clickedItem = 0;

const activateLasers = ()=>{
  const clickedItem = 0;
  clickedItem = clickedItem + 1;
}

class AddNewProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_name: '',
      special_package: [],
      price: 0,
      package_including: [],
      product_info: [],
      quantity: 0,
      product_image: [],
      short_desc: '',
      category_id: ''
    };
  }

  async componentWillReceiveProps(nextprops) {
    const { fakeAuth, history, productAdd } = this.props;
    const { props } = this;
    if (nextprops.productAdd !== productAdd && nextprops.productAdd.productAddStatus === 'success') {
      const { data, status, message } = nextprops.productAdd.result;
      if (status && status === 200) {
      }
      else if ((status === 0 || status === 400) && message) {
      }
      else {
      }
    }
  }

  handleAddProductApi = () => {

  }

 

  render() {
    return (
      <div>
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Products</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header border-0">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Add New Product</h3>
                  </div>
                </div>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Product Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Product Name"
                        />
                      </div>

                      <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Special Package
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Special Package"
                      />
                    </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Product Price
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="$400"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Quantity of Product
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter Product Quantity"
                        />
                      </div>

                      <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Short Description
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Short Description"
                      />
                    </div>


                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Product Discount
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="30%"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Package Includes
                        </label>
                        <UniqueInput/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Product Information
                        </label>
                        <UniqueInput/>
                      </div>
                    
                      <div className="DropDown-parent">
                      <diV className="Dropdown_Left">
                      <select name="choice">
                         <option value="first">category_id</option>
                         <option value="second" selected>1</option>
                         <option value="third">2</option>
                      </select>
                       </diV>
                      <diV className="Dropdown_Right">
                      <select name="choice">
                      <option value="first">skin_type_id</option>
                      <option value="second" selected>1</option>
                      <option value="third">2</option>
                     </select>
                      </diV>
                      </div>

                      <button type="button" class="btn btn-default mt-4">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer pt-0">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="copyright text-center text-lg-left  text-muted mt-4 ml-4">
                &copy; 2020 OCSkin Care
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  productAdd: state.productAdd
});

export default connect(mapStateToProps)(AddNewProduct);
