import { jwtDecode } from "jwt-decode";

export const decodeTokenAndGetRole = (token) => {
  try {

    const decoded = jwtDecode(token);

    const rawRole =
      decoded?.role ||
      decoded?.userRole ||
      decoded?.type ||
      null;

    // Normalize
    const normalizeRole = (role) => {

      if (!role) return null;

      const roleMap = {


        User: "user",
        user: "user",

        Client: "client",
        client: "client",

        Admin: "admin",
        admin: "admin",
      };

      return roleMap[role] || role.toLowerCase();
    };

    return normalizeRole(rawRole);

  } catch (error) {

    console.error(
      "Error decoding token:",
      error
    );

    return null;
  }
};