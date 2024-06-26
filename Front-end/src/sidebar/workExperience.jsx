import InputFeild from "../components/inputFeild";

const WorkExperience = ({handleChange}) =>{
    return(
        <>
          <div>
            <h4 className="text-lg font-medium mb-2">Work Experience</h4>
            <div>
                <label className="sidebar-label-container">
                    <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                    <span className="checkmark"></span>Any experience
                </label>
                <InputFeild handleChange={handleChange} value="Internship" title="Internship" name="test"/>
                <InputFeild handleChange={handleChange} value="Work remotely" title="Work remotely" name="test"/>
            </div>
        </div>

        </>
    )
}

export default WorkExperience;