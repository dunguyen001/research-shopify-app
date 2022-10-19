import listProducts from "./product-service.js";
import { Router } from 'express';
import Shopify from "@shopify/shopify-api";

const router = Router();

router.get("/", async (req, res) => {
  let status = 200;
  let error = null;

  try {
    const result = await listProducts(req.session);
    return res.json(result)
  } catch (e) {
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

export default router;