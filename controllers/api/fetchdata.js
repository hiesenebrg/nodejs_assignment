const axios = require("axios");


module.exports.fetchdata = async function (req, res) {
  const data = await axios.get("https://api.publicapis.org/entries");
  console.log("The data is ", data.data.entries);
  if (data.data.entries) {
    return res.json(200, {
      success: true,
      data: data.data.entries,
    });
  } else {
    return res.json(500, {
      success: false,
      data: "Something went wrong!",
    });
  }
};

function filterData(data, category) {
  return data.filter((item) => {
    return item.Category === category;
  });
}

function filterDataonCat(data, category, minDataSize) {
  let filterd_data = data.filter((item) => {
    return item.Category === category;
  });
  console.log("asfdf",filterd_data.length);
  if (minDataSize <= filterd_data.length) {
    return filterd_data.slice(0, minDataSize);
  } else {
    return filterd_data;
  }
}

module.exports.fetchdataonCategory = async function (req, res) {
  const data = await axios.get("https://api.publicapis.org/entries");
  all_data = data.data.entries;
  needed_data = filterData(all_data, req.params.cat);
  return res.json(200, { success: true, data: needed_data });
};

module.exports.fetchdataonCategoryrange = async function (req, res) {
  const data = await axios.get("https://api.publicapis.org/entries");
  all_data = data.data.entries;
  needed_data = filterDataonCat(all_data, req.params.cat, req.params.range);
  return res.json(200, { success: true, data: needed_data });
};
