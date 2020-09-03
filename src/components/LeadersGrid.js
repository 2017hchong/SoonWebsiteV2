// array of data for leaders
import React from "react";

import './styles/LeadersGrid.css';

const staffData = [
    {
        imgUrl: require("../images/leaders/lucia.jpg"),
        name: "Lucia Kim",
        role: "Staff",
        // description: "Some kind of short role description or bio for leader 1"
    },
    {
        imgUrl: require("../images/leaders/chris.JPG"),
        name: "Chris Lin",
        role: "Staff",
        // description: "Some kind of short role description or bio for leader 1"
    }
    ];
const dpdData = [
    {
        imgUrl: require("../images/leaders/hayun.jpg"),
        name: "Hayun Chong",
        role: "DPD",
        // description: "Some kind of short role description or bio for leader 2"
    },
    {
        imgUrl: require("../images/leaders/grace.jpg"),
        name: "Grace Lim",
        role: "DPD",
        // description: "Some kind of short role description or bio for leader 3"
    },
    {
        imgUrl: require("../images/leaders/juliette.jpeg"),
        name: "Juliette Jung",
        role: "DPD",
        // description: "Some kind of short role description or bio for leader 4"
    }];
const sjData = [
    {
        imgUrl: require("../images/leaders/joseph.JPG"),
        name: "Joseph Kim",
        role: "Soon Jang",
        // description: "Some kind of short role description or bio for leader 4"
    },
    {
        imgUrl: require("../images/leaders/annling.png"),
        name: "Annling Wang",
        role: "Soon Jang",
        // description: "Some kind of short role description or bio for leader 4"
    },
    {
        imgUrl: require("../images/leaders/jeana.jpg"),
        name: "Jeana Chun",
        role: "Soon Jang",
        // description: "Some kind of short role description or bio for leader 4"
    }
];

// one leader slide (image and info)
const LeaderSlide = ({ data }) => {
    return (
        <div id="leaderSlide">
            <div id={"leaderPicContainer"}>
                <img id="leaderPic" src={data.imgUrl} alt={`${data.name} Photo`} />
            </div>
            <br />
            <p id="leaderName" className={"body"}>{data.name}</p>
            <p id="leaderRole" className={"details"}>
                {data.role} <br/>
                {data.description}
            </p>
            {/*<p class="leaderInfo"><strong>Email: </strong>{data.email}</p>*/}
            {/*<p class="leaderInfo"><strong>Phone: </strong>{data.phone}</p>*/}
        </div>
    )
};


class LeadersGrid extends React.Component {
    render() {
        const staff = staffData.map((value, index) => {
            return <LeaderSlide data={value}/>
        });
        const dpd = dpdData.map((value, index) => {
            return <LeaderSlide data={value}/>
        });
        const sj = sjData.map((value, index) => {
            return <LeaderSlide data={value}/>
        });
        return (
            <div id={"leaders"}>
                <div className={"leadersGrid"}>{staff}</div>
                <div className={"leadersGrid"}>{dpd}</div>
                <div className={"leadersGrid"}>{sj}</div>
            </div>
        );
    }
}

export default LeadersGrid;
