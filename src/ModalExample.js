import React, {useState} from 'react'
import {Modal} from './Modal'

const BUTTON_WRAPPER_STYLE = {
    position: 'relative',
    zIndex: 1,
    marginTop: '10px'
}

const OTHER_CONTENT_STYLE = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: '#ddd',
    padding: '10px'
}
const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
        <div style={BUTTON_WRAPPER_STYLE} className="container">
                 <div class="columns">
                 <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <p>Here we have used React Portals to use Modal efficienty. Now you can place this Modal Component anywhere in the application. By using portals, react has chained this outermost Component with javascript tree . Here you can use event delegation</p>
                 </Modal>
        <div class="column is-6">
        <img src="/images/Lasagne-square-FS-79.jpg" className="inverted" alt="lasagne"/>
            </div>
            <div class="column is-6">
            <div style={OTHER_CONTENT_STYLE} className="container">
         
         <p>Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù (ground meats and tomato sauce) and other vegetables, cheese (which may include ricotta and parmesan), and seasonings and spices such as garlic, oregano and basil.[2] The dish may be topped with melted grated mozzarella cheese. Typically, the cooked pasta is assembled with the other ingredients and then baked in an oven. The resulting lasagne casserole is cut into single-serving square portions.</p>
           </div>
           <button className="btn-custom" onClick={() => setIsOpen(true)}>
                Open Modal
                 </button>
            </div>
            </div>
        </div>
     
       
    </>

    )
}

export default ModalExample
