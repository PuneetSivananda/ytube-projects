import { Router } from "express";

const router = Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
