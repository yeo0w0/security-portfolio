import mongoose, { Schema, models, model } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  category: "web" | "lab";
  featured: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true, trim: true, maxlength: 500 },
  techStack: { type: [String], default: [] },
  repoUrl: { type: String, default: "" },
  demoUrl: { type: String, default: "" },
  category: { type: String, enum: ["web", "lab"], default: "lab" },
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default (models.Project as mongoose.Model<IProject>) ||
  model<IProject>("Project", ProjectSchema);
