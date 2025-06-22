
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

/* GET travel view */

const travel = async function (req, res, next) {
  try {
    const response = await fetch(tripsEndpoint, options);
    const json = await response.json();
    let message = null;

    if (!(json instanceof Array)) {
      message = "API lookup error";
      json = [];
    } else if (!json.length) {
      message = "No trips exist in our database!";
    }

    res.render("travel", {
      title: "Travlr Getaways",
      trips: json,
      message
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
};
// Get single trip details by trip code
const travelDetails = async function (req, res, next) {
  try {
    const tripCode = req.params.code; // Extract trip code from URL params
    const response = await fetch(`${tripsEndpoint}/${tripCode}`, options);
    const trip = await response.json();

    if (!trip) {
      return res.status(404).render('error', {
        title: "Trip Not Found",
        message: "The requested trip could not be found."
      });
    }

    res.render("travelDetail", {
      title: `${trip[0].name} Details`,
      trip: trip[0]
    });
  } catch (err) {
    res.status(500).render('error', {
      title: "Server Error",
      message: err.message
    });
  }
};
/* GET index view */
const index = (req, res) => {
  res.render('index', {});
};

// Export the functions
module.exports = {
  travel,
  index,
  travelDetails
};