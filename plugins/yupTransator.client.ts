import { phoneNumberValidator } from "../utilities/TextUtil";
import { setLocale, addMethod, string } from "yup";
export default defineNuxtPlugin((nuxtApp) => {
  setLocale({
    mixed: {
      default: "ورودی نامعتبر است",
      required: "${path}  را وارد کنید ",
    },
    string: {
      email: "ایمیل نامعتبر است",
      min: " حداقل مقدار ${path} ${min} است",
      max: " حداقل مقدار ${path} ${max} است",
    },
    number: {
      min: " حداقل مقدار ${path} ${min} است",
    },
  });
  addMethod(string, "phoneNumber", function phoneNumber(phoneNumber: string) {
    return this.test(
      "phoneNumber",
      "شماره موبایل نامعتبر است",
      function (value) {
        if (value === undefined) return true;
        return phoneNumberValidator(value?.toString()!);
      }
    );
  });
});
