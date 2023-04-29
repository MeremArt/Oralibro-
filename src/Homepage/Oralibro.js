import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Oralibro = () => {

return (
    <div className="container">
      <div className="row">
  
  <div className='d-none d-md-block col-4'>
        <Sidebar />
  </div>
  <div className='col-sm12 col-md-8 col-lg-8 col-xl-4'>
    <BrowserRouter>
      <Routes>
        <Route path="/">
  {/*
    the router here checks the ur url path and whenever a route matche the specified path, it returns the corresponding component,
  example if path matches Discover it returns the <Discover /> page/component.
  So to switch between components, when a component is clicked in the side bar i have added a <a href></a> in the sidebar options bar
  to redirect to the corresponding path equal to the title (without space or '&').
  
  then the the route here automatically changes to the corresponding route of that path */}

   {/*  uncomment whatever component is ready. i commented them so as not to throw exception/error
   
   
      <Route path="Discover" element={<Discover />} />  
          <Route path="Podcast" element={<Podcast />} />
          <Route path="ReviewsRatings" element={<ReviewsRatings />} />
          <Route path="BookSwap" element={<BookSwap />} />
          <Route path="ReadingChallenges" element={<ReadingChallenges />} />
          <Route path="BookRecomendations" element={<BookRecomendations />} />
          <Route path="AuthorSpotlight" element={<AuthorSpotlight />} />
          <Route path="EventsCalender" element={<EventsCalender />} />
          <Route path="Bookstore" element={<Bookstore />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      </div>

      </div>
    </div>
  );





 {/* uncomment ur code and comment mine, if u dont understand mine and want to use urs
  
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
      </div>
    </div>
  );
}; /*}
};

export default Oralibro;
