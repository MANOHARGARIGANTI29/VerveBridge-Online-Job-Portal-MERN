
import EmploymentType from "./EmployementType";
import JobPostingData from "./jobPostingData";
import Location from "./location";
import Salary from "./salary"
import WorkExperience from "./workExperience";


const Sidebar = ({handleChange,handleClick})=>{
    return(
        <>
        <div className="space-y-5">
            <h3 className="text-lg font-bold mb-2">filters</h3>
            <Location handleChange={handleChange}/>
            <Salary handleChange={handleChange} handleClick={handleClick}/>
            <JobPostingData handleChange={handleChange}/>
            <WorkExperience handleChange={handleChange}/>
            <EmploymentType handleChange={handleChange}/>
        </div>
        </>
    )
}

export default Sidebar;