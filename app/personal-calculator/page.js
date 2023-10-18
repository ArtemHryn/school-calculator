import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import PersonalCalculator from "@components/PersonalCalculator/PersonalCalculator";

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
