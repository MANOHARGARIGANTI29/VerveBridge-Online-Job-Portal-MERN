import InputFeild from "../components/inputFeild";

const Location = ({handleChange})=>{
    return(
        <>
        <div>
            <h4 className="text-lg font-medium mb-2">Location</h4>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>All
                </label>
                <InputFeild handleChange={handleChange} value="london" title="London" name="test"/>
                <InputFeild handleChange={handleChange} value="seattle" title="Seattle" name="test"/>
                <InputFeild handleChange={handleChange} value="madrid" title="Madrid" name="test"/>
                <InputFeild handleChange={handleChange} value="boston" title="Boston" name="test"/>
            </div>
        </div>
        </>
    )
}

export default Location;