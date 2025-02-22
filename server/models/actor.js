import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Actor = sequelize.define("actors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Actor;
