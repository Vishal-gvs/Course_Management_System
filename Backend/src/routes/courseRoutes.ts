import express from "express";
import { Course } from "../models/course_models";
import { authenticateToken, isInstructor, isAdmin } from "../middleware/authMiddleware";
import { User } from "../models/user_models";

const router = express.Router();

router.get("/courses", authenticateToken, async (_req, res) => {
  const courses = await Course.find().populate("instructorId", "name");
  res.json(courses);
});

router.post("/courses", authenticateToken, isInstructor, async (req: any, res) => {
  const course = new Course({
    ...req.body,
    instructorId: req.user.id,
  });
  await course.save();
  res.status(201).json(course);
});

router.put("/courses/:id", authenticateToken, isInstructor, async (req: any, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });

  if (course.instructorId.toString() !== req.user.id) return res.sendStatus(403);
  Object.assign(course, req.body);
  await course.save();
  res.json(course);
});

router.delete("/courses/:id", authenticateToken, isInstructor, async (req: any, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.sendStatus(404);

  if (course.instructorId.toString() !== req.user.id) return res.sendStatus(403);
  await course.deleteOne();
  res.sendStatus(204);
});

router.delete("/admin/course/:id", authenticateToken, isAdmin, async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

router.post("/courses/:id/enroll", authenticateToken, async (req: any, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });

  if (!course.studentIds.includes(req.user.id)) {
    course.studentIds.push(req.user.id);
    await course.save();
  }

  res.json({ message: "Enrolled" });
});

router.delete("/courses/:id/unenroll", authenticateToken, async (req: any, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found" });

  course.studentIds = course.studentIds.filter(
    (sid: any) => sid.toString() !== req.user.id
  );
  await course.save();
  res.json({ message: "Unenrolled successfully" });
});

router.get("/my-courses", authenticateToken, async (req: any, res) => {
  const courses = await Course.find({ studentIds: req.user.id }).populate("instructorId", "name");
  res.json(courses);
});

export default router;
