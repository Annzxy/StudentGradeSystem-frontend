export type StatusType = "idle" | "pending" | "success" | "failure";

export type HttpMethodType = "PUT" | "GET" | "POST" | "DELETE";

export interface SemesterType {
  semester_number: number;
  year: number;
  id: number;
}

export interface CourseType {
  course_code: string;
  course_name: string;
  semesters: number[];
  id: number;
}
