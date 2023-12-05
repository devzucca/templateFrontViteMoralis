import * as yup from "yup";

const usernameMatch =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*\$%\^&\*])(?=.{8,})/;
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/;
const usernameSignUp = /^(\S+$)/g;
const minPriceVerify = /^[0-9]*$/;

export const SelectTypeSchemas = yup.object().shape({
  price: yup.string(),

  minimumBid: yup.string(),

  minPrice: yup.string(),
});

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "User Name must be at least 5 characters long")
    .max(25, "User name  must contain a maximum of 25 characters")
    .required("Required, Please Enter your User Name")
    .matches(usernameSignUp, "spaces not allowed"),
  password: yup
    .string()
    .required("Required, Please Enter your password")
    .matches(
      passwordRules,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const signUpSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(5, "Full Name must be at least 5 characters long")
    .max(65, "Full name  must contain a maximum of 65 characters")
    .required("Required, Please Enter your Full Name"),
  username: yup
    .string()
    .min(5, "User Name must be at least 5 characters long")
    .max(25, "User name  must contain a maximum of 25 characters")
    .required("Required, Please Enter your User Name ")
    .matches(usernameSignUp, "spaces not allowed"),
  email: yup
    .string()
    .max(255)
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      passwordRules,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character: ! @ # . * % & @"
    ),
  repeatPassword: yup
    .string()
    .required("Repeat Password is required")
    .when("password", {
      is: (val: string | any[], schema: yup.StringSchema<string>) =>
        val && val.length > 0
          ? schema.oneOf(
              [yup.ref("password")],
              "Both passwords need to be the same"
            )
          : schema,
    }),
});

export const ceateNftSchema = yup.object().shape({
  theFile: yup.mixed().nullable().required("Require"),
  nameNftField: yup
    .string()
    .min(7, "Name must be at least 7 characters long")
    .max(20, "name must contain a maximum 20 characters")
    .required("Required"),
  descriptionNft: yup
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(200, "Description must contain maximum 200 characters")
    .required("Required"),
  energy: yup.string().min(1, "Energy must be at least 1 characters long"),
  strength: yup.string().min(1, "Strength must be at least 1 characters long"),
  impact: yup.string().min(1, "Impact must be at least 1 characters long"),
  sustainability: yup
    .string()
    .min(1, "Sustainability must be at least 1 characters long"),
  rarity: yup.string().min(1, "Rarity must be at least 1 characters long"),
  royalties: yup
    .string()
    .min(1, "Royalties must be at least 1 characters long"),
  price: yup
    .string()
    .max(11, "amount not allowed maximum 10.000.000.000")
    .matches(minPriceVerify, "negative numbers are not allowed"),
  // .when(["minimumBid", "price"], {
  //     is: (val: string | any[], val2: string | any[] ) => (
  //     (val2 * 0.8 > val2) ? true : false),
  //     then: yup
  //     .string()
  //     .oneOf([yup.ref("minimumBid")],
  //       "Both password need to be the same"
  //     )
  //   }),

  // .min(5, "User Name must be at least 5 characters long"),
  // .required("Required, Please Enter your User Name"),
  // if(typeFile.test("bids")){
  //     console.log("aqui fran")
  // }
  minimumBid: yup
    .string()
    .max(11, "amount not allowed maximum 10.000.000.000")
    .matches(minPriceVerify, "negative numbers are not allowed"),
  minPrice: yup.number(),
});

export const EditProfileSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(5, "User Name must be at least 5 characters long")
    .max(65, "Full nae  must contain a maximum of 65 characters"),
  username: yup
    .string()
    .min(5, "User Name must be at least 5 characters long")
    .max(25, "User name  must contain a maximum of 25 characters")
    .matches(usernameSignUp, "spaces not allowed"),
  email: yup.string().email("Must be a valid email").max(255),
  userAvatar: yup.string(),
  userBanner: yup.string(),
  biography: yup
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(200, "Description must contain maximum 200 characters"),
});

export const RecoverEmail = yup.object().shape({
  email: yup.string().email("Must be a valid email").max(255),
});
