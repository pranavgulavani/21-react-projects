import { useState } from "react";

const birthdaysData = [
    {
        name: "Bertie Yates",
        age: "29 years",
        profilePic: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "Lola McKenzie",
        age: "34 years",
        profilePic: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "Derek Nguyen",
        age: "27 years",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Amara Singh",
        age: "31 years",
        profilePic: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        name: "Javier Morales",
        age: "36 years",
        profilePic: "https://randomuser.me/api/portraits/men/23.jpg"
    }
];


function BirthdayBuddy() {
    const [birthdays, setBirthdays] = useState(birthdaysData)
    return (
        <div className="container-fluid vh-100 bg-info ">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="card h-100">
                        <div className="card-header">
                            Reminder
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> {birthdays.length} Birthdays today</h5>
                            {
                                birthdays.length > 0 && (
                                    birthdays.map((item, key) => {
                                        return (
                                            <div key={key} className="mt-3">
                                                <BirthdayItem name={item.name} age={item.age} profilePic={item.profilePic} />
                                            </div>
                                        )
                                    })
                                )

                            }
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary w-100 m-3" onClick={() => setBirthdays([])}>Clear All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BirthdayItem = ({ name, age, profilePic }) => {
    return (
        <div className="row">
            <div className="col-auto">
                <img src={profilePic} className="rounded-circle" alt="profile-pic" style={{ height: "60px", width: "60px" }} />
            </div>
            <div className="col-auto">
                <span className="card-text">{name}</span>
                <p className="text-secondary">{age}</p>
            </div>
        </div>
    )
}

export default BirthdayBuddy