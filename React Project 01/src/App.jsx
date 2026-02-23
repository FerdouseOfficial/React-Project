import React from "react";
import Cards from "./assets/components/cards";

const App = (props) => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "3 days ago",
      jobPosition: "Software Engineer",
      tag1: "Full-time",
      tag2: "Entry level",
      payments: "$55/hour",
      location: "Mountain View, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 week ago",
      jobPosition: "iOS Developer",
      tag1: "Full-time",
      tag2: "Mid level",
      payments: "$60/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "5 days ago",
      jobPosition: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      payments: "$70/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      jobPosition: "Cloud Solutions Architect",
      tag1: "Part-time",
      tag2: "Senior level",
      payments: "$75/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "10 days ago",
      jobPosition: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      payments: "$65/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      jobPosition: "Data Scientist",
      tag1: "Full-time",
      tag2: "Entry level",
      payments: "$50/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      datePosted: "1 week ago",
      jobPosition: "Embedded Systems Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      payments: "$68/hour",
      location: "Palo Alto, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      companyName: "Adobe",
      datePosted: "6 days ago",
      jobPosition: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid level",
      payments: "$40/hour",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      companyName: "Uber",
      datePosted: "3 weeks ago",
      jobPosition: "Mobile App Developer",
      tag1: "Full-time",
      tag2: "Mid level",
      payments: "$55/hour",
      location: "San Francisco, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      companyName: "Airbnb",
      datePosted: "2 weeks ago",
      jobPosition: "Product Manager",
      tag1: "Full-time",
      tag2: "Senior level",
      payments: "$80/hour",
      location: "San Francisco, USA",
    },
  ];
  return (
    <div className="parent">
      <Cards />
    </div>
  );
};

export default App;
