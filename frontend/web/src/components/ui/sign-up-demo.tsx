import { SignUpPage, CustomerData, Testimonial } from "./sign-up";

const sampleTestimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Maria Silva",
    handle: "@mariasilva",
    text: "O processo de cadastro foi super fácil! Em poucos minutos já estava fazendo meus pedidos."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "João Santos",
    handle: "@joaosantos",
    text: "Plataforma incrível! O cadastro é simples e a experiência de compra é excepcional."
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Ana Costa",
    handle: "@anacosta",
    text: "Adorei a facilidade para me cadastrar. Interface moderna e muito intuitiva!"
  },
];

interface SignUpPageDemoProps {
  onSignIn?: () => void;
  onSignUp?: () => void;
}

const SignUpPageDemo = ({ onSignIn, onSignUp }: SignUpPageDemoProps = {}) => {
  const handleSignUp = (customerData: CustomerData, password: string) => {
    console.log("Customer Data:", customerData);
    console.log("Password:", password);
    alert(`Cadastro realizado com sucesso!\n\nDados do cliente:\nNome: ${customerData.firstName} ${customerData.lastName}\nEmail: ${customerData.email}\nTelefone: ${customerData.phone}\nCPF: ${customerData.cpf}\n\nVerifique o console para dados completos.`);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
    alert("Cadastro com Google clicado");
  };
  
  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn();
    } else {
      alert("Redirecionando para tela de login...");
    }
  };

  return (
    <div className="bg-background text-foreground">
      <SignUpPage
        heroImageSrc="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=2160&q=80"
        testimonials={sampleTestimonials}
        onSignUp={handleSignUp}
        onGoogleSignUp={handleGoogleSignUp}
        onSignIn={handleSignIn}
        title={
          <span className="font-light text-foreground tracking-tighter">
            Cadastre-se na <span className="font-bold text-violet-500">Feira Casa</span>
          </span>
        }
        description="Crie sua conta e tenha acesso aos melhores produtos para sua casa"
      />
    </div>
  );
};

export default SignUpPageDemo;