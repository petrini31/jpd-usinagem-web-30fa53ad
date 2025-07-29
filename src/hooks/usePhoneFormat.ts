
import { useState } from "react";

export const usePhoneFormat = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const formatPhone = (input: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = input.replace(/\D/g, '');
    
    // Limita a 11 dígitos
    const limited = numbers.slice(0, 11);
    
    // Aplica formatação baseada no tamanho
    if (limited.length <= 2) {
      return limited;
    } else if (limited.length <= 7) {
      return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    } else {
      return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
    }
  };

  const handleChange = (input: string) => {
    const formatted = formatPhone(input);
    setValue(formatted);
    return formatted;
  };

  const getRawValue = () => {
    return value.replace(/\D/g, '');
  };

  return {
    value,
    setValue,
    handleChange,
    getRawValue,
    formatPhone
  };
};
