import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import {useForm} from "react-hook-form";
import CreatableSelect from "react-select/creatable";
const Update = () =>{
    const {id}  = useParams();
    // console.log(id)
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,companyLogo,employmentType,description,postedBy,skills} = useLoaderData()
    const [selectedOption,setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm();
      const onSubmit = (data) => {
        data.skills = selectedOption;
        fetch(`https://vervebridge-online-job-portal.onrender.com/update-job/${id}`,{
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then((res)=> res.json())
        .then((result)=>{
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Updated Successfully!")
            }
        })
    };
      const options = [
        {value:"JavaScript",label:"JavaScript"},
        {value:"C++",label:"C++"},
        {value:"HTML",label:"HTML"},
        {value:"React",label:"React"},
        {value:"Node",label:"Node"},
        {value:"MongoDB",label:"MongoDB"},
        {value:"Redux",label:"Redux"},
      ]
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
                {/* form */}
                <div className="bg-[#FAFAFA] py-10px-4 lg:px-16">
                    <form onSubmit={handleSubmit(onSubmit)} className="space">
                        {/* first row */}
                        <div className="create-job-flex">
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Job Title</label>
                             <input 
                             type="text" defaultValue={jobTitle} placeholder="Job Title" {...register("jobTitle")} className="create-job-input"/>
                            </div>
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Company Name</label>
                             <input 
                             type="text" placeholder="Ex : Microsoft" defaultValue={companyName} {...register("companyName")} className="create-job-input"/>
                            </div>
                        </div>
                        {/* second row */}
                        <div className="create-job-flex">
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Minimum Salary</label>
                             <input 
                             placeholder="20k"
                             type="text" 
                             defaultValue={minPrice}
                              {...register("minPrice")} className="create-job-input"/>
                            </div>
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Maximum Salary</label>
                             <input 
                             type="text" placeholder="$120k"
                             defaultValue={maxPrice}
                              {...register("maxPrice")} className="create-job-input"/>
                            </div>
                        </div>
                        {/* 3rd Row */}
                        <div className="create-job-flex">
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">salaryType</label>
                             <select {...register("salaryType")} className="create-job-input">
                                <option value={salaryType}>{salaryType}</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                             </select>
                            </div>
                            <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">jobLocation</label>
                             <input 
                             type="text" placeholder="Ex: New York" defaultValue={jobLocation} {...register("jobLocation")} className="create-job-input"/>
                            </div>
                        </div>
                        {/* 4th row */}
                        <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Job Posting Date</label>
                             <input 
                             type="date" placeholder="Ex: 2024-6-03" defaultValue={postingDate} {...register("postingDate")} className="create-job-input"/>
                            </div>
                            <div className="lg:w-1/2 w-full">

                             <label className="block mb-2 text-lg">Experience Level</label>

                             <select {...register("experienceLevel")} className="create-job-input">
                                <option value={experienceLevel}>{experienceLevel}</option>
                                <option value="Noexperience">Any Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                             </select>
                            </div>
                           
                        </div>
                        {/* 5th row */}
                        <div>
                            <label className="block mb-2 text-lg">Required Skill Sets</label>
                            <CreatableSelect defaultValue={skills}
                            onChange={setSelectedOption}
                            options={options}isMulti className="create-job-input py-4"/>
                        </div>
                        {/* 6th row */}
                        <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                             <label className="block mb-2 text-lg">Company Logo</label>
                             <input 
                             type="url" placeholder="Paste Your Company logo URL : https://weshare.com/img1" defaultValue={companyLogo} {...register("companyLogo")} className="create-job-input"/>
                            </div>
                            <div className="lg:w-1/2 w-full">

                             <label className="block mb-2 text-lg">Employment Type</label>

                             <select {...register("employmentType")} className="create-job-input">
                                <option value={employmentType}>{employmentType}</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Temporary">Temporary</option>
                             </select>
                            </div>
                           
                        </div>
                        {/* 7th row */}
                        <div className="w-full">
                            <label className="block mb-2 text-lg">Job Description</label>
                            <textarea className="w-full pl-3 py-1.5 focus:outline-none" rows={6} 
                            defaultValue={description}
                            placeholder="Job Description" {...register("description")}/>
                        </div>
                        {/* last Row */}
                        <div className="w-full">
                            <label className="block mb-2 text-lg"> Job Posted By</label>
                            <input type="email" placeholder="your email"
                            defaultValue={postedBy}
                            {...register("postedBy")} className="create-job-input"
                            />
                        </div>
                        <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
                    </form>
                </div>
             </div>
        </>
    )
}

export default Update;