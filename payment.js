function checkPayment(amount) {

  if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
    return {
      success: false,
      message: "Invalid amount"
    };
  }

  if (!Number.isSafeInteger(amount)) {
    return {
      success: false,
      message: "Invalid amount"
    };
  }

  if (amount >= 100) {
    return {
      success: true,
      message: "Payment accepted"
    };
  }

  return {
    success: false,
    message: "Payment rejected"
  };
}

module.exports = checkPayment;
