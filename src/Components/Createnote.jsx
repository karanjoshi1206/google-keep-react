import { react, useState } from "react"


function Createnote(props) {
    const [note, setnote] = useState({
        title: "",
        content: ""
    })
    const [expand, setExpand] = useState(false)
    const InputEvent = (event) => {
        // const value = event.target.value
        // const name = event.target.name
        const { name, value } = event.target
        setnote((prevData) => {
            return {
                ...prevData, [name]: value
            }
        })
    }
    const addevent = () => {
        props.passData(note);
        setnote({
            title: "",
            content: ""
        })

    }
    return (
        <>
            <div className="createnote">
                <div className="form" >
                    {
                        expand ? <input type="text" value={note.title} onChange={InputEvent} name="title" placeholder="TITLE " autoComplete="off" /> : null

                    }
                    <textarea value={note.content} onChange={InputEvent} name="content" placeholder="Enter your note here..." onClick={() => {
                        setExpand(true)
                    }} onDoubleClick={() => {
                        setExpand(false)
                    }} ></textarea>
                    <button onClick={addevent} >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}
export default Createnote;