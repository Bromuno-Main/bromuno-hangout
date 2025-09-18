export interface JobInterface {
  _id: string,
  title: string,
  company: string,
  location: string,
  type: "Full-time" | "Part-time" | "Contract",
  salaryRange: string,
  description: string,
}
