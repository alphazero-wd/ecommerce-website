const {
  getCart,
  addToCart,
  updateQuantity,
  deleteCartItem,
  clearCart,
} = require("../controllers/cart");
const auth = require("../middlewares/auth");
const router = require("express").Router();

router.get("/", auth, getCart);
router.post("/", auth, addToCart);
router.put("/:id", auth, updateQuantity);
router.delete("/:id", auth, deleteCartItem);
router.delete("/", auth, clearCart);

module.exports = router;
