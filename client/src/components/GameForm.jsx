import React from 'react'

const GameForm = (props) => {
    const {formData, formError, handleChange, handleSubmit, deleteButton, handleDelete} = props

    return (
        <>
        <fieldset>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <p className='errMsg'>{formError.title}</p>
            </div>
            <input type='text' name='title' value={formData.title} onChange={handleChange}/>
            <div>
                <label>Genre:</label>
                <p className='errMsg'>{formError.genre}</p>
            </div>
            <input type='text' name='genre' value={formData.genre} onChange={handleChange}/>
            <div>
                <label>Emote:</label>
                <p className='errMsg'>{formError.emote}</p>
            </div>
            <input type='text' name='emote' value={formData.emote} onChange={handleChange} placeholder='--[ Optional ]--'/>
            <div>
                <label>Description:</label>
                <p className='errMsg'>{formError.description}</p>
            </div>
            <textarea type='text' name='description' value={formData.description} onChange={handleChange} placeholder='Optional...'/>
            <br/>
            <div>
                {deleteButton?<button>Update Game info</button>:<button>Add Game</button>}
                {deleteButton?<button onClick={handleDelete}>Delete Game</button>:<></>}
            </div>
        </form>
        </fieldset>
        </>
    )
}

export default GameForm