import Container from "@components/Container/Container";
import Hero from "@components/Hero/Hero";
import PersonalCalculator from "@components/PersonalCalculator/PersonalCalculator";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://karmolog4u.vercel.app"),
    title: "Персональний калькулятор",
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    description: "Калькулятор для розрахунку персональной матриці",

    alternates: {
      canonical: "/",
      languages: {
        "uk-UA": `/`,
      },
    },
    openGraph: {
      title: "Персональний калькулятор",
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      description: "Калькулятор для розрахунку персональной матриці",
      url: "/",
    },
  };
}

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
