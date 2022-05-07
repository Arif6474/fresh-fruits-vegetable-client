import React from 'react';
import { Accordion } from 'react-bootstrap';

const AskQuestion = () => {
    return ( <div className="mt-4">
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>What are the benefits of eating fruits and vegetables?</Accordion.Header>
    <Accordion.Body>
    A diet rich in vegetables and fruits can lower blood pressure, reduce the risk of heart disease and stroke, prevent some types of cancer, lower risk of eye and digestive problems, and have a positive effect upon blood sugar, which can help keep appetite in check.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why is it important to eat fruit?</Accordion.Header>
    <Accordion.Body>
    Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What is the importance of vegetables?</Accordion.Header>
    <Accordion.Body>
    Vegetables are important for human health because of their vitamins, minerals, phytochemical compounds, and dietary fiber content. Especially antioxidant vitamins (vitamin A, vitamin C, and vitamin E) and dietary fiber content have important roles in human health.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div>
    );
};

export default AskQuestion;