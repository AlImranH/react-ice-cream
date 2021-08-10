import React from 'react'
import classes from './Builder.module.css'
import Items from './Items/Items'
import Modal from './Modal/Modal'
import TotalPrice from './TotalPrice/TotalPrice'

const Builder = ({ items, price, add, remove, scoops }) => {
    return (
        <div>
            <div className={classes.builder}>
              <h3>Build your own Ice Cream Sundae</h3>
              {/* Items will be here */}
              <Items items={ items } add={add} remove={remove} scoops={scoops}/>

              {/* Total price */}
              <TotalPrice price={price}/>
              <button type="button" onclick="next()" className={[classes.order, "rounded"].join(" ")}>
                Add to Cart
              </button>
            </div>
            <Modal>
            <div className="formContainer">
                  <h1>Complete the form below and hit submit</h1>
                  <form className="orderForm">
                    <ul>
                      <li>
                        <input
                          type="text"
                          name="name"
                          className="fieldStyle fieldSplit alignLeft"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          name="phone"
                          className="fieldStyle fieldSplit alignRight"
                          placeholder="Phone no."
                        />
                      </li>
                      <li>
                        <input
                          type="text"
                          name="email"
                          className="fieldStyle fieldFull"
                          placeholder="Email"
                        />
                      </li>
                      <li>
                        <textarea
                          name="address"
                          className="fieldStyle"
                          placeholder="Address"
                        ></textarea>
                      </li>
                      <li>
                        <input type="submit" value="Submit Order" />
                      </li>
                    </ul>
                  </form>
                </div>
            </Modal>
        </div>
    )
}

export default Builder
