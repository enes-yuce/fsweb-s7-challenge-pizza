import React, { useState } from "react";
import {
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
  Card,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Stil dosyasını ekledik
import axios from "axios";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Onay from "./Onay";

const PizzaOrderForm = () => {
  // State tanımlamaları
  const [selectedSize, setSelectedSize] = useState(""); // Seçilen boyutu saklamak için state
  const [selectedThickness, setSelectedThickness] = useState(""); // Seçilen hamur kalınlığını saklamak için state
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [userName, setUserName] = useState("");
  const [orderCount, setOrderCount] = useState(1);
  const pizzaPrice = 85.5;
  const ingredientPrice = 5;
  const minIngredientSelection = 4;
  const maxIngredientSelection = 10;
  // Boyut seçimi değiştiğinde çağrılacak fonksiyon
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;
    if (event.target.checked) {
      if (selectedIngredients.length < maxIngredientSelection) {
        setSelectedIngredients((prevIngredients) => [
          ...prevIngredients,
          ingredient,
        ]);
      } else {
        toast.error("Lütfen en fazla 10 malzeme seçiniz.");
      }
    } else {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((item) => item !== ingredient)
      );
    }
  };
  // Kullanıcı adı girişi değiştiğinde çağrılacak fonksiyon
  const handleNameChange = (event) => {
    const name = event.target.value;
    setUserName(name);
  };
  // Hamur kalınlığı seçimi değiştiğinde çağrılacak fonksiyon
  const handleThicknessChange = (event) => {
    setSelectedThickness(event.target.value);
  };

  const calculateTotalPrice = () => {
    const ingredientTotal = selectedIngredients.length * ingredientPrice;
    return (pizzaPrice + ingredientTotal) * orderCount;
  };

  const incrementOrderCount = () => {
    setOrderCount((prevCount) => prevCount + 1);
  };

  const decrementOrderCount = () => {
    if (orderCount > 1) {
      setOrderCount((prevCount) => prevCount - 1);
    }
  };
  const handleSubmitOrder = async () => {
    if (!selectedSize || !selectedThickness || !userName) {
      toast.error("Lütfen boyut, hamur kalınlığı ve isim alanlarını doldurun.");
      return;
    }

    if (selectedIngredients.length < minIngredientSelection) {
      toast.error("Lütfen en az 4 malzeme seçiniz.");
    } else if (selectedIngredients.length > maxIngredientSelection) {
      toast.error("Lütfen en fazla 10 malzeme seçiniz.");
    } else {
      // Sipariş verme işlemi burada yapılabilir
      (" ");
    }

    const data = {
      isim: userName,
      boyut: selectedSize,
      malzemeler: selectedIngredients,
      özel: "", // Özel notu buraya ekleyebilirsiniz
    };
    try {
      const response = await axios.post("https://reqres.in/api/pizza", data);
      console.log("Sunucu yanıtı:", response.data);
      toast.success("Siparişiniz alınmıştır!");
      window.location.href = "/Onay";
    } catch (error) {
      console.error("Sunucu hatası:", error);
      toast.error("Sipariş verirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  const ingredients = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "mushrooms", label: "Mantar" },
    { value: "olives", label: "Zeytin" },
    { value: "sausage", label: "Sosis" },
    { value: "ham", label: "Jambon" },
    { value: "onions", label: "Soğan" },
    { value: "cheese", label: "Ekstra Peynir" },
    { value: "bell pepper", label: "Biber" },
    { value: "jalapenos", label: "Jalapeno" },
    { value: "pineapple", label: "Ananas" },
    { value: "chicken", label: "Tavuk" },
    { value: "tomatoes", label: "Domates" },
    { value: "corn", label: "Mısır" },
  ];

  return (
    <>
      <div>
        <Header />
        <ToastContainer /> {/* Toastify bileşeni */}
        <FormGroup row className="mt-2">
          <Col md={3}></Col>
          <Col md={3} className="text-left">
            <Label for="sizeSelect" className="text-left">
              <b>Boyut Seç</b>
            </Label>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="size"
                  value="small"
                  checked={selectedSize === "small"}
                  onChange={handleSizeChange}
                />{" "}
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="size"
                  value="medium"
                  checked={selectedSize === "medium"}
                  onChange={handleSizeChange}
                />{" "}
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="size"
                  value="large"
                  checked={selectedSize === "large"}
                  onChange={handleSizeChange}
                />{" "}
                Büyük
              </Label>
            </FormGroup>
          </Col>
          <Col md={3}>
            <Label for="thicknessSelect">
              {" "}
              <b> Hamur Seç </b>
            </Label>
            <Input
              type="select"
              name="select"
              id="thicknessSelect"
              value={selectedThickness}
              onChange={handleThicknessChange}
            >
              <option value="">Hamur Kalınlığı Seçin</option>
              <option value="ince">İnce</option>
              <option value="normal">Normal</option>
              <option value="kalın">Kalın</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label>
            <b>Ek Malzemeler</b>
          </Label>
          <Row>
            {ingredients.map((ingredient, index) => (
              <Col md={4} key={index}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      value={ingredient.value}
                      onChange={handleIngredientChange}
                    />
                    {ingredient.label}
                  </Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
        </FormGroup>
        <FormGroup row>
          <Col md={6}>
            <Label>
              {" "}
              <b> Sipariş Notu </b>
            </Label>
            <Form>
              <Input
                type="textarea"
                placeholder="Siparişine eklemek istediği bir not var mı?"
              />
            </Form>{" "}
          </Col>
          <Col md={6}>
            <Label>
              {" "}
              <b> İsminizi Giriniz </b>
            </Label>
            <Form>
              <Input
                onChange={handleNameChange}
                value={userName}
                placeholder="En az 3 karakter giriniz"
              />
            </Form>
          </Col>
        </FormGroup>
        <hr className="divider" />
      </div>
      <div>
        <FormGroup row>
          <Col md={6}>
            <div className="mt-5">
              <Button color="warning" onClick={decrementOrderCount}>
                -
              </Button>
              <span className="mx-2">{orderCount}</span>
              <Button color="warning" onClick={incrementOrderCount}>
                +
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <CardTitle>
                  <b>Sipariş Toplamı</b>
                </CardTitle>
                <div>
                  <div style={{ color: "grey" }}>
                    <Row>
                      <Col> Seçimler: </Col>
                      <Col> {selectedIngredients.length * 5} ₺ </Col>
                    </Row>
                  </div>
                  <div style={{ color: "red" }}>
                    <Row>
                      <Col>Toplam</Col>
                      <Col> {calculateTotalPrice()} ₺</Col>
                    </Row>
                  </div>
                </div>
              </CardBody>
              <Button
                color="warning"
                className=" btn-md btn-block col-12"
                onClick={handleSubmitOrder}
                type="submit"
              >
                Sipariş Ver
              </Button>
            </Card>
          </Col>
        </FormGroup>
      </div>
    </>
  );
};

export default PizzaOrderForm;
