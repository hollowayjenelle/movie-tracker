import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Genre = sequelize.define("genres", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Genre;
