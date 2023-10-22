import CompatibilityCalculator from "@components/CompatibilityCalculator/CompatibilityCalculator";
import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";

export const metadata = {
  title: "Калькулятор сумусності",
  description: "Калькулятор для розрахунку матриці сумісності",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

const page = () => {
  return (
    <Container>
      <Hero
        title={"Розрахуйте вашу матрицю сумісності"}
        linkName={"Перейти до особистої матриці долі"}
        link={"/personal-calculator"}
      />
      <CompatibilityCalculator />
    </Container>
  );
};

export default page;
