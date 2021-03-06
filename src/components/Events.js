import React from 'react';
import './styles/Events.css';
import Container from 'react-bootstrap/Container';
import config from "../config";

import Arrow from "./Arrow";
import PastEventCard from "./PastEventCard";
import MainEventCard from "./MainEventCard";
import EventCarousel from "./EventCarousel";

/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function loadWeeklyEvents(callback) {
    const weeklyEvents = [];
    const pastEvents = [];
    const specialEvents = [];
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.eventSpreadsheetId,
                range: "Sheet1!A4:T"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const d = new Date();
                    d.setHours(0,0,0,0);
                    data.forEach(event => {
                        var tmp = new Date(event[1]);
                        if(tmp - d >= 0) {
                            weeklyEvents.push({
                                name: event[0],
                                date: event[1],
                                time: event[2],
                                place: event[3],
                                image: event[4],
                                description: event[5]
                            })
                        }

                            pastEvents.push({
                                name: event[0],
                                date: event[1],
                                time: event[2],
                                place: event[3],
                                image: event[4],
                                description: event[5]
                            });


                        if(event[7] !== undefined) {
                            console.log("HELLO: ", event[7]);
                            specialEvents.push({
                                name: event[7],
                                date: event[8],
                                time: event[9],
                                place: event[10],
                                image: event[11],
                                description: event[12],
                                description2: event[13]
                            })
                        }
                    });

                    callback({
                        weeklyEvents,
                        pastEvents,
                        specialEvents
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}

const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
    "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

class Events extends React.Component {
    state = {
        weeklyEvents: [],
        pastEvents: [],
        specialEvents: [],
        error: null
    };

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                // Your API key will be automatically added to the Discovery Document URLs.
                discoveryDocs: config.discoveryDocs
            })
            .then(() => {
                // 3. Initialize and make the API request.
                loadWeeklyEvents(this.onLoad);
            });

        this.onLoad = (data, error) => {
            if (data) {
                const weeklyEvents = data.weeklyEvents;
                const pastEvents = data.pastEvents;
                const specialEvents = data.specialEvents;
                // console.log("TMP PASSING: ");
                // console.log(data.tmp);
                this.setState({
                    weeklyEvents: weeklyEvents,
                    pastEvents: pastEvents,
                    specialEvents: specialEvents
                });
                // this.setState({ weeklyEvents });
            } else {
                this.setState({error});
            }
        };
    };

    componentDidMount() {
        // 1. Load the JavaScript client library.
        window.gapi.load("client", this.initClient);
    };

    render() {
        var eventCards = this.state.weeklyEvents.map((value, index) => {
            const dateSplit = value ? value.date.split('/'): null;

            return <MainEventCard
                    title={value.name}
                    img={value.image}
                    date={monthNames[dateSplit[0]-1] + " " + dateSplit[1] + ", " + dateSplit[2]}
                    time={value.time + " EST"}
                    description={value.description}
                    location={value.place}
                    isLink={validURL(value.place)}
                />;
        });

        // var previewCards = this.state.weeklyEvents.map((value, index) => {
        //     const dateSplit = value.date.split('/');
        //     const year = dateSplit[2];
        //     const date = dateSplit[1];
        //     const month = dateSplit[0];
        //
        //     const dateFormat = monthNames[month - 1] + " " + date + ", " + year;
        //     const timeFormat = value.time + " EST";
        //
        //     return <PastEventCard
        //         title={value.name}
        //         date={dateFormat}
        //         time={timeFormat}
        //         img={value.image}
        //     />
        // });

        var upcomingEvents = this.state.weeklyEvents.length === 0 ?
            <div className={"body centered"}>Loading... Refresh the page if this continues.</div> :
            <EventCarousel eventCards={eventCards} previewCards={null}/>;

        return (
            <Container>
                <h1 className="header">Events</h1>
                <h2 className={"subheader leftAlign"}> Upcoming Events </h2>
                <div id={"upcomingEventsCont"}>{upcomingEvents}</div>
                <h2 className={"subheader"}> All Events </h2>
                <PastEvents data={this.state.pastEvents}/>
            </Container>
        )
    }
};

class PastEvents extends React.Component {
    constructor(props) {
        super(props);

        const d = new Date();
        this.state = {
            month: d.getMonth(),
            year: d.getFullYear()
        };
        this.clickUp = this.clickUp.bind(this);
        this.clickDown = this.clickDown.bind(this);
    }

    clickUp() {
        var month;
        var year;
        if(this.state.month === 0) {
            month = 11;
            year = this.state.year - 1;
        } else {
            month = this.state.month - 1;
            year = this.state.year;
        }

        this.setState({
            month: month,
            year: year
        })
    }
    clickDown() {
        var month;
        var year;
        if(this.state.month === 11) {
            month = 0;
            year = this.state.year + 1;
        } else {
            month = this.state.month + 1;
            year = this.state.year;
        }

        this.setState({
            month: month,
            year: year
        })
    }

    render() {

        const month = monthNames[this.state.month];
        const events = this.props.data.map((value, index) => {
            const dateSplit = value.date.split('/');
            const year = dateSplit[2];
            const date = dateSplit[1];
            const month = dateSplit[0];

            const dateFormat = monthNames[month - 1] + " " + date + ", " + year;
            const timeFormat = value.time + " EST";

            if(Number(year) === this.state.year && Number(month) === this.state.month + 1)
                return (
                    <PastEventCard
                        title={value.name}
                        date={dateFormat}
                        time={timeFormat}
                        img={value.image}
                    />
                );
            return(null);
        });
        return (
            <div>
                <div id={"month"}>
                    <span id={"calendar"} className={"body"}>{month} {this.state.year}</span>
                    <div id={"arrowCont"}>
                        <Arrow
                            clickFunction={ this.clickUp }
                            isRight={false}/>
                        <Arrow
                            clickFunction={ this.clickDown }
                            isRight={true}/>
                    </div>
                </div>
                <div id={"pastEvents"}>
                    {events}
                </div>
            </div>
        )
    }
};

export default Events;