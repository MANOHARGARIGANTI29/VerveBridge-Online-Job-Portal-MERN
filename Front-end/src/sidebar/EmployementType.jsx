
import InputFeild from "../components/inputFeild";
const EmploymentType = ({handleChange}) =>{
    return(
        <>
         <div>
            <h4 className="text-lg font-medium mb-2">Employement Type</h4>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>All Types
                </label>
                <InputFeild handleChange={handleChange} value="Full-time" title="Full-Time" name="test"/>
                <InputFeild handleChange={handleChange} value="Part-time" title="Part-Time" name="test"/>
                <InputFeild handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
            </div>
        </div>
        </>
    )
}

export default EmploymentType;