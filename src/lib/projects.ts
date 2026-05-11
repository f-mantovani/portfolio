import mongoose from "mongoose";
import Project from "./models/Project.model";

async function dbConnect() {
  const connect = await mongoose.connect(process.env.MONGODB || "");
  return `connected to ${connect.connections[0].name} `;
}

export const getProjects = async () => {
  const status = await dbConnect();
  console.log(status);
  const projects = await Project.find({}).lean(true);

  return projects;
};

export const getProject = async (id: string) => {
  const status = await dbConnect();
  console.log(status);
  const project = await Project.findOne({ _id: id }).lean(true);

  return project;
};
