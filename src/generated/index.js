"use strict";

const regions = {};

regions["region_01"] = require("./region_01");
regions["region_02"] = require("./region_02");
regions["region_03"] = require("./region_03");
regions["region_04"] = require("./region_04");
regions["region_05"] = require("./region_05");
regions["region_06"] = require("./region_06");
regions["region_07"] = require("./region_07");
regions["region_08"] = require("./region_08");
regions["region_09"] = require("./region_09");
regions["region_10"] = require("./region_10");
regions["region_11"] = require("./region_11");
regions["region_12"] = require("./region_12");
regions["region_13"] = require("./region_13");
regions["region_14"] = require("./region_14");
regions["region_15"] = require("./region_15");
regions["region_16"] = require("./region_16");
regions["region_17"] = require("./region_17");
regions["region_18"] = require("./region_18");
regions["region_19"] = require("./region_19");
regions["region_20"] = require("./region_20");
regions["region_21"] = require("./region_21");
regions["region_22"] = require("./region_22");
regions["region_23"] = require("./region_23");
regions["region_24"] = require("./region_24");
regions["region_25"] = require("./region_25");
regions["region_26"] = require("./region_26");
regions["region_27"] = require("./region_27");
regions["region_28"] = require("./region_28");
regions["region_29"] = require("./region_29");
regions["region_30"] = require("./region_30");

function regionCount() {
  return Object.keys(regions).length;
}

module.exports = { regions, regionCount };
