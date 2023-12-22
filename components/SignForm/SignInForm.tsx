import Input from "@/components/SignInput/Input";
import PasswordInput from "@/components/SignInput/PasswordInput";
import { EMAIL_RULES, ERROR_MESSAGE, PASSWORD_RULES, PLACEHOLDER } from "@/utils/InputConstant";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

function SignInForm() {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });

  return (
    <StyledForm>
      <Controller
        control={control}
        name="email"
        rules={EMAIL_RULES}
        render={({ field, fieldState }) => (
          <Input label="이메일" {...field} placeholder={PLACEHOLDER.email} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={PASSWORD_RULES}
        render={({ field, fieldState }) => (
          <PasswordInput label="비밀번호" {...field} placeholder={PLACEHOLDER.password} hasError={Boolean(fieldState.error)} errorText={fieldState.error?.message} />
        )}
      />
    </StyledForm>
  );
}

export default SignInForm;

const StyledForm = styled.form``;
