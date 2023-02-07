import React from 'react'

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d-flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> (xx)xxxx-xxxx</label>
            <i className="fa fa-envelope"></i>
            <label> farmacia-sac@email.com</label>
          </div>

          <div>
            <div className="right row RText">
              <label>Dúvidas?</label>
              <label>Precisa de ajuda?</label>
              {/* <span>🏳️</span>
              <label htmlFor="">BR</label>
              <span>🏳️</span>
              <label htmlFor="">EN</label> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
