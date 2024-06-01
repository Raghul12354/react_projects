import { useEffect, useState } from "react";
import Header from "./header";
import Items from "./items";
import Loading from "./loading";

const url = 'https://course-api.com/react-tours-project';

const tour = () => {
    const [loading, setloading] = useState(true);
    const [tours, setTour] = useState([]); 
    const removeTour = (id) => {
        const newTour = tours.filter((val) => val.id !== id)
        setTour(newTour);
    }
    const fetchTour = async () => {
        setloading(true);

        try {
            const response = await fetch(url); //fetching the url 
            const tours = await response.json();
            setloading(false)
            setTour(tours) // tours = url coz we fetched it.
        } catch (error) {
            setloading(false)
            console.log(error);
        }
        // console.log(tour);
    };

    useEffect(() => {
        fetchTour()
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    };

    // refresh 
    if (tours.length === 0) { 
        return (
            <div className="flex flex-col items-center justify-center my-6">
                <h2 className="text-5xl tracking-wider font-bold mt-10">No Tours Left</h2>
                <button onClick={() => fetchTour()} className="bg-blue text-black text-lg py-2 px-5 my-6">Refresh</button> {/*fetchTour is function that we used it fetch the url*/}
            </div>
        )
    }
    //Normal return
    return (
        <div className="h-min w-full bg-grey">
            <Header />
            <div>
                {tours.map((item) => { //tours (state) has the values of array coz we fetched it and declared into the tours.
                    return (<Items {...item} removeTour={removeTour} />) //using spread operator removeTour is props 
                })}
            </div>
        </div>
    )
};

export default tour;