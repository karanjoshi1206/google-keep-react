import react, { useState } from "react"
import "../style.css"
import Header from "./Header"
import Footer from "./Footer"
import Createnote from "./Createnote"
import Note from "./Note"
const App = () => {
    const [addItem, setAddItem] = useState([]);

    const addnote = (note) => {
        setAddItem((prevdata) => {
            return [...prevdata, note]
        })
    }
    const ondelete = (id) => {
        setAddItem((olddata) => olddata.filter((currentvalue, indexval) => {
            return indexval !== id;
        }))
    }
    return (
        <>
            <Header />
            <Createnote passData={addnote} />
            <div className="note_container">
                {addItem.map((value, index) => {
                    return <Note key={index} id={index} title={value.title} content={value.content} deleteItem={ondelete} />
                })}
            </div>
            <Footer />


        </>
    )
}
export default App;