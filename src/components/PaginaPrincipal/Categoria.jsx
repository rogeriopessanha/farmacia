import React from 'react'


const Categoria = () => {

    const data = [
        {
            // cateImg: '',
            cateName: 'coisas',
        },
    ]
  return (
    <>
        <div className="categ">
           {
             data.map((value, index) => {
                return(
                    <div className="box f-flex">
                        
                    </div>
                )
            })
           }
        </div>
    </>
  )
}

export default Categoria