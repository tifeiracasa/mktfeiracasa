import React from 'react';
import { SignUpPage, CustomerData, Testimonial } from "./sign-up";
import { validateCPF, validateEmail, validatePhone, validateCEP } from "../../lib/validators";

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

interface EnhancedSignUpDemoProps {
  onSignIn?: () => void;
  onSignUpSuccess?: () => void;
}

const EnhancedSignUpDemo = ({ onSignIn, onSignUpSuccess }: EnhancedSignUpDemoProps = {}) => {
  // Estado para gerenciar erros de validação (implementação futura)
  // const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSignUp = (customerData: CustomerData, password: string) => {
    // Validação antes do envio
    const newErrors: Record<string, string> = {};
    
    if (!validateEmail(customerData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!validateCPF(customerData.cpf)) {
      newErrors.cpf = 'CPF inválido';
    }
    
    if (!validatePhone(customerData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }
    
    if (!validateCEP(customerData.address.zipCode)) {
      newErrors.zipCode = 'CEP inválido';
    }
    
    if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join('\n');
      alert(`Por favor, corrija os erros no formulário:\n\n${errorMessages}`);
      return;
    }
    
    // Simula envio para API
    console.log("Customer Data:", customerData);
    console.log("Password:", password);
    
    if (onSignUpSuccess) {
      onSignUpSuccess();
    } else {
      alert(`✅ Cadastro realizado com sucesso!\n\n👤 ${customerData.firstName} ${customerData.lastName}\n📧 ${customerData.email}\n📱 ${customerData.phone}\n🆔 ${customerData.cpf}\n📍 ${customerData.address.street}, ${customerData.address.number}\n    ${customerData.address.neighborhood} - ${customerData.address.city}/${customerData.address.state}\n    CEP: ${customerData.address.zipCode}\n\n🎉 Bem-vindo(a) à Feira Casa!`);
    }
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign Up clicked");
    alert("🚀 Cadastro com Google será implementado em breve!");
  };
  
  const handleSignIn = () => {
    if (onSignIn) {
      onSignIn();
    } else {
      alert("Redirecionando para tela de login...");
    }
  };

  // Função para buscar endereço por CEP (implementação futura)
  // const fetchAddressByCEP = async (cep: string) => { ... }

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

export default EnhancedSignUpDemo;