import ShopifyContext from "../context/ShopifyContext.js";

export default function registerSesstion(app) {
  return async (req, res, next) => {
    try {
      const session = await ShopifyContext.Utils.loadCurrentSession(
        req,
        res,
        app.get("use-online-tokens")
      );
      req.session = session
      next()
    } catch (error) {
      next(error);
    }
  };
}
