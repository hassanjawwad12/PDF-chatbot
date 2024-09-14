import { data } from "browserslist";
import supabase from "./Supabase";
import { useNavigate } from "react-router-dom";

const RefID = "pghmataemimjybvormpl";
const AuthTokenValidator = `sb-${RefID}-auth-token`;
const Host = "http://localhost:5173/";

export async function validate() {
  const data = await supabase.auth.getSession();
  
  if (data.data.session != null) {
    console.log("Logged In");
    return data.data.session;
  } else {
    console.log("Not Logged In");
    window.location.href = "/login";
  }
}

export const GetPureUser = async () => {
  const LoggedinUser = getCurrentLocalUser();
  return LoggedinUser;
  let Parseduser = null;

  if (LoggedinUser) {
    console.log(LoggedinUser.user);
    Parseduser.provider = LoggedinUser.user.app_metadata.provider;
    return Parseduser;
  }

  return { statuscode: 404, user: null };
};

export const login = async ({ email, pass }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  if (error) {
    return { statuscode: 400, err: error.message, data: null };
  } else if (data) {
    return { statuscode: 200, data: data, err: null };
  }
};

export const google_login = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    redirect_uri: `${Host}/GL`,
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }
};

export const microsoft_login = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "azure",
    options: {
      scopes: "profile",
    },
  });

  if (error) {
  }

  if (data) {
  }
};

export const signout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
};

export const signup = async ({ email, pass, name }) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: pass,
    options: {
      data: {
        name: name,
      },
    },
  });

  if (error) {
    return { statuscode: 400, err: error };
  }

  if (data) {
    if (data.identities === null) {
      alert("User Already Exists");
      return { statuscode: 1, err: "User Already Exists" };
    }
    alert("Kindly Confirm your Email");
    return { statuscode: 200, data: data };
  }

  return { statuscode: 3, err: "Unknown Error" };
};

export const forgotpassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${Host}/login`,
  });

  if (error) {
  }
  if (data) {
  }
};

export const getCurrentLocalUser = () => {
  const user = localStorage.getItem(AuthTokenValidator);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export function getauthstatus() {
  const token = localStorage.getItem(AuthTokenValidator);
  if (!token) {
    return false;
  }
  return true;
}
