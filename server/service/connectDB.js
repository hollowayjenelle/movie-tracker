import sequelize from "../config/sequelize.js";
import associate from "../relationships/index.js";
import populateAll from "../scripts/populate.js";

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync({ force: false });
    console.log("Tables created successfully");

    associate();
    console.log("created associations");

    await populateAll();
    console.log("Tables are populated");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
    process.exit(1);
  }
};
