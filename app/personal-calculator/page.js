import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import PersonalCalculator from "@components/PersonalCalculator/PersonalCalculator";

export const metadata = {
  title: "Персональний калькулятор",
  description: "Калькулятор для розрахунку персональной матриці",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

const PersonalCalculatorPage = () => {
  return (
    <main>
      <Container>
        <Hero
          title={"Розрахуйте свою матрицю долі"}
          linkName={"Перейти до  матриці сумісності"}
          link={"/compatibility-calculator"}
        />
        <PersonalCalculator />
      </Container>
    </main>
  );
};

export default PersonalCalculatorPage;
