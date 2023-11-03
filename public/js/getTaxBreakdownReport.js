function calculateTax(
  income,
  gender,
  age,
  city_corporation
) {
  const taxFreeIncome =
    gender === "female" || age > 65
      ? 400000
      : 350000;
  document.getElementById(
    "breakdown-report"
  ).innerHTML += `<li>Your tax-free income (the amount you can earn without having to pay for any taxes) is BDT ${taxFreeIncome}.</li>`;

  income = parseFloat(income);
  let taxableIncome = income - taxFreeIncome;

  if (taxableIncome <= 0) {
    document.getElementById(
      "breakdown-report"
    ).innerHTML += `<li>Since your yearly income BDT ${income} did not exceed the tax-free income, your taxable amount for this year is at <strong>BDT 0</strong>.</li>`;
    return;
  }

  document.getElementById(
    "breakdown-report"
  ).innerHTML += `<li>Your yearly income exceeds the tax-free income, your taxable amount for this year is at BDT ${taxableIncome}.</li>`;

  let totalTax = 0;

  if (taxableIncome <= 100000) {
    totalTax = taxableIncome * 0.05;
    document.getElementById(
      "breakdown-report"
    ).innerHTML += `<li>Your taxable amount BDT ${taxableIncome} exceeds the BDT 100,000 threshold, so your total tax is 5% of your taxable income. In your case, this is BDT ${totalTax}.</li>`;
  } else {
    totalTax += 100000 * 0.05;
    document.getElementById(
      "breakdown-report"
    ).innerHTML += `<li>Your taxable amount BDT ${taxableIncome} reaches the BDT 100,000 threshold, 5% of it is added to tax. In your case, this is BDT ${
      0.05 * taxableIncome
    }. Your total tax now stands at BDT ${totalTax}.</li>`;
    taxableIncome -= 100000;

    if (taxableIncome <= 300000) {
      totalTax += taxableIncome * 0.1;
      document.getElementById(
        "breakdown-report"
      ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 300,000 threshold, so 10% of it is added to the tax. In your case, this is BDT ${
        0.1 * taxableIncome
      }. Your total tax now stands at BDT ${totalTax}.</li>`;
    } else {
      totalTax += 300000 * 0.1;
      document.getElementById(
        "breakdown-report"
      ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 300,000 threshold, so 10% of it is added to the tax. In your case, this is BDT ${
        0.1 * taxableIncome
      }. Your total tax now stands at BDT ${totalTax}.</li>`;
      taxableIncome -= 300000;

      if (taxableIncome <= 400000) {
        totalTax += taxableIncome * 0.15;
        document.getElementById(
          "breakdown-report"
        ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 400,000 threshold, so 15% tax is added to it. In your case, this is BDT ${
          0.15 * taxableIncome
        }. Your total tax now stands at BDT ${totalTax}.</li>`;
      } else {
        totalTax += 400000 * 0.15;
        document.getElementById(
          "breakdown-report"
        ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 400,000 threshold, and 15% tax is added to it. In your case, this is BDT ${
          0.15 * taxableIncome
        }. Your total tax now stands at BDT ${totalTax}.</li>`;
        taxableIncome -= 400000;

        if (taxableIncome <= 500000) {
          totalTax += taxableIncome * 0.2;
          document.getElementById(
            "breakdown-report"
          ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 500,000 threshold, and 20% tax is added to it. In your case, this is BDT ${
            0.2 * taxableIncome
          }. Your total tax now stands at BDT ${totalTax}.</li>`;
        } else {
          totalTax += 500000 * 0.2;
          taxableIncome -= 500000;
          document.getElementById(
            "breakdown-report"
          ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 500,000 threshold, and 20% tax is added to it. In your case, this is BDT ${
            0.2 * taxableIncome
          }. Your total tax now stands at BDT ${totalTax}.</li>`;
          // Calculate the remaining tax at 25%
          if (taxableIncome > 1650000) {
            totalTax += taxableIncome * 0.25;
            document.getElementById(
              "breakdown-report"
            ).innerHTML += `<li>You have an additional BDT ${taxableIncome} taxable income which exceeds the BDT 1,650,000 threshold, and 25% tax is added to it. In your case, this is BDT ${
              0.25 * taxableIncome
            }. Your total tax now stands at BDT ${totalTax}.</li> `;
          }
        }
      }
    }
  }

  // Check if the user is eligible for the minimum tax
  const minimumTax =
    city_corporation === "dhaka" ||
    city_corporation === "chattogram"
      ? 5000
      : city_corporation === "othercity"
      ? 4000
      : 3000;

  // Apply minimum tax if applicable
  res = Math.max(minimumTax, totalTax);
  if (res !== totalTax) {
    document.getElementById(
      "breakdown-report"
    ).innerHTML += `<li>Based on your Corporation, you are subject to a minimum tax of BDT ${minimumTax}. Even though your taxable income is BDT ${taxableIncome}, the minimum tax for your region is BDT ${minimumTax}. Therefore, your total tax for this year is BDT ${minimumTax}.</li>`;
  }
  document.getElementById(
    "breakdown-report"
  ).innerHTML += `Your total tax for this year comes to BDT ${totalTax}.`;

  return totalTax;
}
