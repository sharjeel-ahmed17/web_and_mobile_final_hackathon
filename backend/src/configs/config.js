import "dotenv/config";

export const config = {
 monogo_uri:process.env.MONGO_URI,
 port:process.env.PORT,
 auth_secret:process.env.AUTH_SECRET,
}