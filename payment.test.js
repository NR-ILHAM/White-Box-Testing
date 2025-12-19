const checkPayment = require('./payment');

describe("checkPayment()", () => {

  test("amount greater than 100 is accepted", () => {
    const r = checkPayment(150);
    expect(r.success).toBe(true);
  });

  test("amount equal to 100 is accepted", () => {
    const r = checkPayment(100);
    expect(r.success).toBe(true);
  });

  test("amount less than 100 is rejected", () => {
    const r = checkPayment(99);
    expect(r.success).toBe(false);
  });

  test("amount less than 100 is rejected", () => {
    const r = checkPayment(1);
    expect(r.success).toBe(false);
  });

  test("amount is zero", () => {
    const r = checkPayment(0);
    expect(r.success).toBe(false);
  });

  test("amount is negative", () => {
    const r = checkPayment(-10);
    expect(r.success).toBe(false);
  });

  test("amount is string", () => {
    const r = checkPayment("500");
    expect(r.success).toBe(false);
  });

  test("amount is null", () => {
    const r = checkPayment(null);
    expect(r.success).toBe(false);
  });

  test("amount is undefined", () => {
    const r = checkPayment();
    expect(r.success).toBe(false);
  });


  test("amount is a very large safe number", () => {
    const r = checkPayment(82452922926);
    expect(r.success).toBe(true);
  });

  
  test("amount exceeds JavaScript safe integer limit", () => {
    const r = checkPayment(Number.MAX_SAFE_INTEGER + 1);
    expect(r.success).toBe(false);
  });

});
