import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

interface UniqueEmail {
  email: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<UniqueEmail>();

  const onSubmit: SubmitHandler<UniqueEmail> = (data) => {
    console.log("Form Data:", data);
    navigate("/overview ");
  };

  return (
    <div className="max-w-[401px] w-full flex flex-col bg-white items-center justify-center h-[502px] rounded-xl border border-[#EFEFEF]">
      <div className="flex items-center justify-center mb-12">
        <img src="/dingpay-merchant-logo.svg" alt="TicketsByDingpay" />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-[32px] leading-7 font-semibold text-[#1E1E1E] mb-2">
          Welcome back!
        </h1>
        <p className="text-[16px] text-[#6C7788] tracking-normal leading-7 font-regular">
          Continue with the email address used to create your account.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[353px]">
        <div className="flex flex-col mb-12">
          <label
            htmlFor="password"
            className="text-[14px] font-regular leading-4 tracking-normal mb-2 text-[#1E1E1E]"
          >
            Email address <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <input
              id="email"
              className={`w-full h-12 text-[14px] rounded-[12px] border px-4 font-regular leading-4 tracking-normal outline-none focus:ring-2 focus:ring-blue-100 transition-all
                ${errors.email ? "border-red-500" : "border-[#D4DAE3]"}
              `}
              placeholder="johndoe@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />
          </div>

          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`max-w-[250px] w-full  h-12 cursor-pointer rounded-[1000px] transition-colors font-semibold text-[14px] leading-4 tracking-normal
            ${
              isSubmitting
                ? "bg-gray-200 text-black cursor-not-allowed"
                : "bg-[#D4DAE3] text-[#A0A7B4] hover:bg-gray-300"
            }
          `}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </div>

        <div className="flex items-center  mt-[24px] justify-center">
          <button className="text-[#6C7788] cursor-pointer font-regular text-[16px] tracking-normal leading-[24px] font-regular">
            Don’t have an account?{" "}
            <span className="text-black font-bold">Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
