import React from 'react'


const Categoria = () => {

    const data = [
        {
            cateImg: './components/assets/img/produtos/remedio.png',
            cateName: 'produtos',
        },
    ]
  return (
    <>
        <div className="categ">
           {
             data.map((value, index) => {
                return(
                    <div className="box f-flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })
           }
        </div>
    </>
  )
}

export default Categoria