/*
describe("Pizza Sipariş Formu", () => {
  it("Inputa metin girme testi", () => {
    cy.visit("http://localhost:5173/Siparis");

    cy.get('input[type="text"]').type("Enes Yüce");

    cy.get('input[type="text"]').should("have.value", "Enes Yüce");
  });
});
*/

/*
describe("Pizza Sipariş Formu", () => {
    it("Birden fazla malzeme seçme testi", () => {
      cy.visit("http://localhost:5173/Siparis");
  
      cy.get('input[type="checkbox"][value="pepperoni"]').check();
      cy.get('input[type="checkbox"][value="mushrooms"]').check();
      cy.get('input[type="checkbox"][value="olives"]').check();
      cy.get('input[type="checkbox"][value="sausage"]').check();
      cy.get('input[type="checkbox"][value="ham"]').check();

      cy.get('input[type="checkbox"]:checked').should("have.length", 5);
    });
  });
  */

describe("Pizza Sipariş Formu", () => {
  it("Formu Gönderme Testi", () => {
    cy.visit("http://localhost:5173/Siparis");

    cy.get('input[type="radio"][value="large"]').check();

    // Hamur kalınlığını seçin
    cy.get('select[name="select"]').select("kalın");

    cy.get('input[type="checkbox"][value="pepperoni"]').check();
    cy.get('input[type="checkbox"][value="mushrooms"]').check();
    cy.get('input[type="checkbox"][value="olives"]').check();
    cy.get('input[type="checkbox"][value="sausage"]').check();
    cy.get('input[type="checkbox"][value="ham"]').check();

    // İsminizi girin
    cy.get('input[type="text"]').type("Enes Yüce");

    cy.get('input[type="text"]').should("have.value", "Enes Yüce");

    // Sipariş Notu girin
    cy.get(
      'textarea[placeholder="Siparişine eklemek istediği bir not var mı?"]'
    ).type("Ekstra acı olmasın lütfen.");

    // Sipariş ver butonuna tıklayın
    cy.get("button").contains("Sipariş Ver").click();
  });
});
